import React from 'react'
import FormNote from './FormNote'
import InputBar from './InputBar'
// import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const nameRegex = /[^\p{L} ]/u
const ICregex1 = /\d{9}/
const ICregex2 = /\d{12}/
function copyObjectOf(obj) {
    return JSON.parse(JSON.stringify(obj))
}
// const fieldNames = {
//     gender: 'gender',
//     iN: 'identityNumber',
//     dob: 'dob',
//     regNum: 'registrationNum',
//     phoneNum: 'phoneNum'
// }
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                gender: '-Chọn-',
                name: '',
                dob: '',
                registrationNumber: '',
                phoneNumber: '',
                email: '',
                ngayKhaiBao: '',
                vungDich: '',
                symtoms: '',
            },
            errors: {

            }
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleValidation = this.handleValidation.bind(this)
    }
    handleValidation(event) {
        const fields = copyObjectOf(this.state.fields);
        let errors = {};
        let formIsValid = true;

        //Name
        if (!fields['name']) {
            formIsValid = false;
            errors['name'] = 'Hãy điền trường còn trống';
        }

        if (typeof fields['name'] !== 'undefined') {
            if (fields['name'].match(nameRegex)) {
                formIsValid = false;
                errors['name'] = 'Chỉ các chữ cái';
            }
            if (fields['name'].match(/\s{2,}/u)) {
                formIsValid = false;
                errors['name'] = 'Tên không hợp lệ'
            }
        }



        // Date of birth
        if (!this.state.fields['dob']) {
            formIsValid = false;
            errors['dob'] = 'Chọn ngày sinh'
        }

        // CMND
        if (!fields['identityNumber']) {
            formIsValid = false;
            errors['identityNumber'] = 'Hãy điền trường còn trống';
        }

        if (typeof fields['identityNumber'] !== 'undefined') {
            if (!(fields['identityNumber'].match(ICregex1) || fields['identityNumber'].match(ICregex2))) {
                formIsValid = false;
                errors['identityNumber'] = 'CCCD/CMT không hợp lệ';
            }
        }
        // gender
        if (this.state.fields['gender'] === '-Chọn-') {
            formIsValid = false;
            errors['gender'] = 'Hãy chọn giới tính của bạn'
        }

        // mã nhân khẩu
        if (!fields['registrationNumber']) {
            formIsValid = false;
            errors['registrationNumber'] = 'Hãy điền trường còn trống';
        }

        if (typeof fields['registrationNumber'] !== 'undefined') {
            if (!fields['registrationNumber'].match(ICregex2)) {
                formIsValid = false;
                errors['registrationNumber'] = 'Mã không hợp lệ';
            }
        }

        // số điện thoại
        if (typeof fields['phoneNumber'] !== 'undefined') {
            if (!fields['phoneNumber'].match(/\d{10}/)) {
                formIsValid = false;
                errors['phoneNumber'] = 'Số điện thoại không hợp lệ';
            }
        }

        // email
        if (typeof fields['email'] !== 'undefined') {
            if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(fields.email))) {
                formIsValid = false;
                errors['email'] = 'Email không hợp lệ';
            }
        }
        // ngày khai báo
        if (!this.state.fields['ngayKhaiBao']) {
            formIsValid = false;
            errors['ngayKhaiBao'] = 'Chưa đặt ngày khai báo'
        }

        // Vùng dịch
        if (!this.state.fields['vungDich']) {
            formIsValid = false;
            errors['vungDich'] = 'Trường bắt buộc'
        }

        // symtoms
        if (!this.state.fields['symtoms']) {
            formIsValid = false;
            errors['symtoms'] = 'Chọn ngày sinh'
        }
        this.setState({ errors: errors });
        return formIsValid;


    }
    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tick()
        }, 1000);
    }
    tick() {
        this.setState({ today: formatDate(new Date()) })
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    handleSubmit(e) {
        console.log(this.state.fields)
        this.componentWillUnmount()
        if (!this.handleValidation())
            alert('Errors occur!')
        else
            alert('Submit succesfully')

        e.preventDefault()
    }
    handleChange(e) {
        console.log(this.state.fields)
        const target = e.target
        const name = target.name
        const value = target.type === 'checkbox' ? target.checked : target.value
        const fields = copyObjectOf(this.state.fields)
        fields[name] = value
        this.setState({ fields: fields })
    }
    render() {
        const action = this.props.action || '#'
        const method = this.props.method
        const fields = copyObjectOf(this.state.fields)
        const today = this.state.today
        return (
            <div>
                <form onSubmit={this.handleSubmit} action={action} method={method}>
                    <fieldset>
                        <legend>Thông tin cá nhân</legend>
                        <InputBar label='name' name='Họ và tên' type='text' onChange={this.handleChange} require={true} error_msg={this.state.errors['name']} val={fields['name'].toUpperCase()} />
                        <InputBar label='dob' name='Ngày sinh' require={true} error_msg={this.state.errors['dob']} type='date' onChange={this.handleChange} val={fields.dob} end={today} />
                        <InputBar label='identityNumber' name='CCCD/CMND' require={true} type='text' error_msg={this.state.errors['identityNumber']} onChange={this.handleChange} />
                        <label htmlFor='gender'>Giới tính<em>(*)</em>: </label>
                        <select id='gender' name='gender' value={this.state.fields['gender']} onChange={this.handleChange}>
                            <option disabled defaultValue={true} value='-Chọn-'>-Chọn-</option>
                            <option value='male'>Nam</option>
                            <option value='female'>Nữ</option>
                        </select>
                        <span>{this.state.errors['gender']}</span>
                        <InputBar label='registrationNumber' name='Mã nhân khẩu' type='text' onChange={this.handleChange} require={true} error_msg={this.state.errors['registrationNumber']} val={fields.registrationNumber} />
                        <InputBar label='phoneNumber' name='Số điện thoại' onChange={this.handleChange} type='text' require={false} error_msg={this.state.errors['phoneNumber']} val={fields.phoneNumber} />
                        {/* <PhoneInput country='vn'/>
                        <br /> */}
                        <InputBar label='email' name='Email' val={fields['email']} error_msg={this.state.errors['email']} type='text' require={false} onChange={this.handleChange} />
                    </fieldset>
                    <fieldset>
                        <legend>Thông tin dịch tễ</legend>
                        <InputBar
                            type='date'
                            val={fields.ngayKhaiBao}
                            label='ngayKhaiBao'
                            onChange={this.handleChange}
                            require={true}
                            error_msg={this.state.errors['ngayKhaiBao']}
                            name='Ngày khai báo'
                            end={today}
                        />

                        <InputBar label='vungDich' name='Vùng dịch' require={true} error_msg={this.state.errors['vungDich']} type='text' onChange={this.handleChange} val={fields.vungDich} />
                        <InputBar label='symtoms' name='Biểu hiện, triệu chứng' require={true} error_msg={this.state.errors['symtoms']} onChange={this.handleChange} val={fields.symtoms} type='text' />
                    </fieldset>
                    <FormNote>((*): Những trường bắt buộc phải điền)</FormNote>
                    <input type='submit' value='Thêm mới' />
                </form>
            </div>
        )
    }
}
export default Form
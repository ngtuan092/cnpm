function Header(props) {
    return (
        <div id="header">
            <div className="logo">
                <img src={process.env.PUBLIC_URL + '/images/images.jpg'} className="logo_image" alt='something' />
            </div>
            <div className="pro_name">
                <h2>Covid-19</h2><br />
                <h2 className="management">Management</h2><br />
                <h2>Machine</h2>
            </div>
            <div className="header_image_container" style={{ background: `url('${process.env.PUBLIC_URL}/images/1.jpg')` }}/>
        </div>
    )
}
export default Header
import React from 'react'

function InputBar(props) {
    return (
        <div>
            <label htmlFor={props.label}>{props.name}{props.require ? <em>(*)</em> : null}:</label>
            {(props.type === 'date') ?
                <input id={props.label} type={props.type} name={props.label} onChange={props.onChange} value={props.val} max={props.end}/>
                :
                <input id={props.label} type={props.type} name={props.label} onChange={props.onChange} value={props.val} />
            }
            <span>{props.error_msg}</span>
            <br />
        </div>
    )
}

export default InputBar


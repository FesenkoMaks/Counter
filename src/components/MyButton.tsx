import React from 'react';
import './MyButton.css'

type MyButtonPropsType = {
    onClick: () => void
    disabled: boolean
    title: string
}

function MyButton(props: MyButtonPropsType) {
    return (
        <div className={'myButton'}>
            <button className={props.disabled ? 'disabled' : 'btn'} onClick={props.onClick} disabled={props.disabled}>{props.title}</button>
        </div>
    )
}

export default MyButton;
import React, {useState} from 'react';
import './SettingCounter.css'
import MyButton from "../components/MyButton";
import {StateType} from "../App";

type SettingCounterPropsType = {
    state: StateType
    maxValue: number
    startValue: number
    onChangeMaxValue: (e: any) => void
    onChangeStartValue: (e: any) => void
    setSettingCounter: (currentMaxValue: number, currentStartValue: number) => void
}


function SettingCounter(props: SettingCounterPropsType) {
    let currentMaxValue = React.createRef<HTMLInputElement>()
    let currentStartValue = React.createRef<HTMLInputElement>()

    let onSetClick = () => {
        if (currentMaxValue.current && currentStartValue.current) {
            props.setSettingCounter(+currentMaxValue.current.value, +currentStartValue.current.value)
        }
    }

    let errorСondition = props.maxValue < 0 ||
        props.startValue < 0 ||
        props.startValue > props.maxValue ||
        props.startValue === props.maxValue

    return (
        <div className={"settingCounter"}>
            <div className={'settingCounterItemTop'}>
                <div className={'settingCounterElement'}>
                    <span>Max value: </span>
                    <input
                        className={errorСondition ? 'errorInput' : 'input'}
                        ref={currentMaxValue}
                        value={props.maxValue}
                        onChange={props.onChangeMaxValue}
                        type="number"/>
                </div>
                <div className={'settingCounterElement'}>
                    <span>Start value: </span>
                    <input
                        className={errorСondition ? 'errorInput' : 'input'}
                        ref={currentStartValue}
                        value={props.startValue}
                        onChange={props.onChangeStartValue}
                        type="number"/>
                </div>
            </div>
            <div className={'settingCounterItemBottom'}>
                <MyButton
                    onClick={onSetClick}
                    disabled={errorСondition} title={'set'}/>
            </div>
        </div>
    )
}

export default SettingCounter
import React from 'react';
import './Counter.css'
import MyButton from "../components/MyButton";
import { StateType } from '../App';

type CounterPropsType = {
    state: StateType
    maxValue: number
    startValue: number
    incCount: () => void
    resetCount: () => void
    count: number
}

function Counter(props: CounterPropsType) {
    let errorСondition = props.maxValue < 0 ||
        props.startValue < 0 ||
        props.startValue > props.maxValue ||
        props.startValue === props.maxValue


    return (
        <div className={"counter"}>
            <div className={'counterItemTop'}>
                <div
                    className={props.count === props.state.maxValue? 'maxCount' : 'number'}>
                    {
                        errorСondition? <span className={'spanError'}>Error!</span> : props.count
                    }
                </div>
            </div>
            <div className={'counterItemBottom'}>
                <MyButton title={'inc'} onClick={props.incCount} disabled={props.count === props.state.maxValue}/>
                <MyButton title={'reset'} onClick={props.resetCount} disabled={props.count === props.state.startValue}/>
            </div>
        </div>
    )
}

export default Counter
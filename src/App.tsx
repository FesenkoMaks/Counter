import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import SettingCounter from "./SettingCounter/SettingCounter";


export type StateType = {
    maxValue: number
    startValue: number
}

function App() {
    let lsMaxValue = Number(localStorage.getItem('maxValue'))
    let lsStartValue = Number(localStorage.getItem('startValue'))


    let [state, setState] = useState({
        maxValue: lsMaxValue ? lsMaxValue : 1,
        startValue: lsStartValue ? lsStartValue : 0
    })


    let [maxValue, setMaxValue] = useState(lsMaxValue ? lsMaxValue : state.maxValue)
    let [startValue, setStartValue] = useState(lsStartValue ? lsStartValue : state.startValue)


    let [count, setCount] = useState(state.startValue);

    function incCount() {
        let result = count + 1
        setCount(result);
    }

    function resetCount() {
        setCount(state.startValue);
    }



    function onChangeMaxValue(e: any) {
        setMaxValue(+e.currentTarget.value)
    }

    function onChangeStartValue(e: any) {
        setStartValue(+e.currentTarget.value)
    }

    function setSettingCounter(currentMaxValue: number, currentStartValue: number) {
        state.maxValue = currentMaxValue
        state.startValue = currentStartValue
        setState({...state})
        resetCount();
        localStorage.setItem('maxValue', currentMaxValue.toString())
        localStorage.setItem('startValue', currentStartValue.toString())
        console.log(localStorage.getItem('maxValue'))
    }


    return (
        <div className="App">
            <Counter
                state={state}
                maxValue={maxValue}
                startValue={startValue}
                incCount={incCount}
                resetCount={resetCount}
                count={count}

            />
            <SettingCounter
                state={state}
                maxValue={maxValue}
                startValue={startValue}
                onChangeMaxValue={onChangeMaxValue}
                onChangeStartValue={onChangeStartValue}
                setSettingCounter={setSettingCounter}
            />

        </div>
    );
}

export default App;

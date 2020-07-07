import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import SettingCounter from "./SettingCounter/SettingCounter";


export type StateType = {
    maxValue: number
    startValue: number
}

function App() {
    let [state, setState] = useState({
        maxValue: 1,
        startValue: 0
    })


    let [maxValue, setMaxValue] = useState(1)
    let [startValue, setStartValue] = useState(0)


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

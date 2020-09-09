import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import SettingCounter from "./SettingCounter/SettingCounter";
import {setMaxValueAC, setStartValueAC} from "./Counter/Counter-reducer";
import {store} from "./redux/Store";
import {rerenderTree} from "./index";


export type StateType = {
    maxValue: number
    startValue: number
}

function App() {

    let state = store.getState().count


    // let [state, setState] = useState({
    //     maxValue: lsMaxValue ? lsMaxValue : 1,
    //     startValue: lsStartValue ? lsStartValue : 0
    // })
    //
    //
    // let [maxValue, setMaxValue] = useState(lsMaxValue ? lsMaxValue : state.maxValue)
    // let [startValue, setStartValue] = useState(lsStartValue ? lsStartValue : state.startValue)


    let [count, setCount] = useState(state.startValue);

    function incCount() {
        let result = count + 1
        setCount(result);
    }

    function resetCount() {
        setCount(state.startValue);
    }



    function onChangeMaxValue(e: any) {
        store.dispatch(setMaxValueAC(+e.currentTarget.value))
        rerenderTree()
    }

    function onChangeStartValue(e: any) {
        store.dispatch( setStartValueAC(+e.currentTarget.value))
        rerenderTree()
    }

    function setSettingCounter(currentMaxValue: number, currentStartValue: number) {
        setStartValueAC(currentStartValue)
        setMaxValueAC(currentMaxValue)
        // state.maxValue = currentMaxValue
        // state.startValue = currentStartValue
        // setState({...state})
        resetCount();
        rerenderTree()
        localStorage.setItem('maxValue', currentMaxValue.toString())
        localStorage.setItem('startValue', currentStartValue.toString())
        console.log(localStorage.getItem('maxValue'))
    }


    return (
        <div className="App">
            <Counter
                state={state}
                maxValue={state.maxValue}
                startValue={state.startValue}
                incCount={incCount}
                resetCount={resetCount}
                count={count}

            />
            <SettingCounter
                state={state}
                maxValue={state.maxValue}
                startValue={state.startValue}
                onChangeMaxValue={onChangeMaxValue}
                onChangeStartValue={onChangeStartValue}
                setSettingCounter={setSettingCounter}
            />

        </div>
    );
}

export default App;

import { createStore, combineReducers } from "redux";
import {CounterReducer} from "../Counter/Counter-reducer";

let reducers = combineReducers({
    count: CounterReducer
})

export const store = createStore(reducers)

const SET_START_VALUE = 'SET_START_VALUE'
const SET_MAX_VALUE = 'SET_MAX_VALUE'
const SET_COUNT = 'SET_COUNT'

let lsMaxValue = Number(localStorage.getItem('maxValue'))
let lsStartValue = Number(localStorage.getItem('startValue'))

const initialState = {
    maxValue: lsMaxValue ? lsMaxValue : 1,
    startValue: lsStartValue ? lsStartValue : 0
}

export const CounterReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case SET_START_VALUE :
            return {
                ...state,
                startValue: action.startValue
        }
        case SET_MAX_VALUE :
            return {
                ...state,
                maxValue: action.maxValue
        }
        case SET_COUNT :
            return {

        }
        default :
            return state
    }
}

export const setStartValueAC = (startValue:number) => {
   return ({type: "SET_START_VALUE", startValue} as const)
}
export const setMaxValueAC = (maxValue:number) =>
    ({type: SET_MAX_VALUE, maxValue} as const)

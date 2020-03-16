import { INCREASE , DECREASE } from '../Types/Counter'

const initState = {
    count : 0
}

const CounterReducer = (state = initState , action) => {
    switch (action.type) {
        case INCREASE :
            state= {count: state.count + action.number}
            break;
        case DECREASE :
            state= {count: state.count - action.number}
            break;
        default:
            break;
    }
    return state;
}
export default CounterReducer;
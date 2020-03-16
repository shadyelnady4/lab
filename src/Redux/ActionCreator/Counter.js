import { INCREASE , DECREASE} from '../Types/Counter'

export const Increase = (payload=1) => {
    return {
        type : INCREASE,
        number: payload
    }
}

export const Decrease = (payload=1) => {
    return {
        type : DECREASE,
        number: payload
    }
}
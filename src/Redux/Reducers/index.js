import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import CounterReducer from './Counter'

const CreateRootReducer= (history)=>combineReducers({
    router: connectRouter(history),
    CounterReducer
})

export default CreateRootReducer;
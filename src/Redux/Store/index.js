import { createStore, compose, applyMiddleware } from 'redux'
import { routerMiddleware } from 'connected-react-router'

import CreateRootReducer from '../Reducers'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

const ConfigStore =(preloadedState?)=>{
    const Store= createStore(
        CreateRootReducer(history),
        preloadedState,
        compose(
            applyMiddleware(routerMiddleware(history))
        )
    )
    return Store;
}
export default ConfigStore;
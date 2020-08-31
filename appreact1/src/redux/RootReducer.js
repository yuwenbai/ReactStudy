import {combineReducers} from 'redux'
import uiReducer from './reducer/uiReducer'
import productsReducer from './reducer/reducer'
import {cartReducer} from './reducer/cardReducer'
const rootReducer = combineReducers({
    uiReducer,
    productsReducer,
    cartReducer
})
export default rootReducer

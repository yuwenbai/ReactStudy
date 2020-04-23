import {combineReducers} from 'redux'
import countReducer from './reducer/countReducer'
import uiReducer from './reducer/uiReducer'

const rootReducer = combineReducers({
    uiReducer
})
export default rootReducer

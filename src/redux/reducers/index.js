/**
 * Created by Axel Drozdzynski on November 27th
 */

import { combineReducers } from 'redux'
import loginReducer from './loginReducer'

export default combineReducers({
    login: loginReducer
})
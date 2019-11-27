/**
 * Created by Axel Drozdzynski on November 27th
 */

import { combineReducers } from 'redux'
import tokenReducer from './tokenReducer'

export default combineReducers({
    token: tokenReducer
})
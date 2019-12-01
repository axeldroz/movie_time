/**
 * Created by Axel Drozdzynski on November 27th
 */

import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import authReducer from './authReducer';
import registerReducer from './registerReducer';
import mainReducer from './mainReducer';

export default combineReducers({
    login: loginReducer,
    auth: authReducer,
    register: registerReducer,
    main: mainReducer
})
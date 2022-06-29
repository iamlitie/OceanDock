// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'

import { reducer as home } from '../pages/home'
import { reducer as shopitem } from '../pages/shopitem'

export default combineReducers({
    home,
    shopitem
})
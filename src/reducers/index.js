import {combineReducers} from 'redux'
import ruleReducer from './rulesReducer'
import formReducer from './formReducer'

export default combineReducers({
  rules: ruleReducer, // rules list
  formRule: formReducer // Add/Edit rule
})
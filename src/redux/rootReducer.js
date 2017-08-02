import { combineReducers } from 'redux'
import modules from './modules'

const { 
  zipcode 
} = modules

const rootReducer = combineReducers({
  zipcode
})

export default rootReducer
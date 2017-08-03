import { combineReducers } from 'redux'
import modules from './modules'

const { 
  zipcode ,
  globalError
} = modules

const rootReducer = combineReducers({
  zipcode,
  globalError
})

export default rootReducer
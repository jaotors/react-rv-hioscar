import { combineReducers } from 'redux'
import modules from './modules'

const { 
  zipcode ,
  selectCover,
  ageInput,
  income,
  checkplan,
  globalError,
  component
} = modules

const rootReducer = combineReducers({
  zipcode,
  selectCover,
  ageInput,
  income,
  checkplan,
  globalError,
  component
})

export default rootReducer
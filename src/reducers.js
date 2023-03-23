import { combineReducers } from 'redux'
import firstReducer from './app/first/duck'
import secondReducer from './app/second/duck'

const rootReducer = combineReducers({
  first: firstReducer,
  second: secondReducer
})

export default rootReducer
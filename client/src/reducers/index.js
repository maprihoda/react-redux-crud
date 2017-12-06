import { combineReducers } from 'redux'
import posts from './posts'

const entitiesReducer = combineReducers({
  posts
  // more entities here
})

const rootReducer = combineReducers({
  entities: entitiesReducer
})

export default rootReducer

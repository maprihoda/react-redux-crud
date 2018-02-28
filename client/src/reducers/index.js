// @flow

import { combineReducers } from 'redux'
import posts from './posts'

const entitiesReducer = combineReducers({
  posts
})

const rootReducer = combineReducers({
  entities: entitiesReducer
})

export default rootReducer

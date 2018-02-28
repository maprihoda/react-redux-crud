// @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux'
import type { PostsState, PostsAction } from './posts'

export type ReduxInitAction = { type: '@@INIT' }
export type Action = ReduxInitAction | PostsAction

export type State = {
  entities: {
    posts: PostsState
  }
}

export type Store = ReduxStore<State, Action>
export type Dispatch = ReduxDispatch<Action>

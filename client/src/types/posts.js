// @flow

export type Post = {
  +id: number,
  +title: string,
  +body: string
}

export type PostPayload = $Diff<Post, { id: number }>

export type Posts = Array<Post>

export type PostsState = {
  +items: Posts,
  +loading: boolean
}

export type PostsAction =
  | { type: 'FETCH_POSTS' }
  | { type: 'FETCH_POSTS_IF_NEEDED' }
  | { type: 'FETCH_POSTS_PENDING' }
  | { type: 'FETCH_POSTS_SUCCESS', payload: Posts }
  | { type: 'FETCH_POSTS_FAILURE' }
  | { type: 'DELETE_POST' }
  | { type: 'DELETE_POST_PENDING', id: number }
  | { type: 'DELETE_POST_SUCCESS', id: number }
  | { type: 'DELETE_POST_FAILURE' }
  | { type: 'CREATE_POST', payload: Post }
  | { type: 'CREATE_POST_PENDING' }
  | { type: 'CREATE_POST_SUCCESS', payload: Post }
  | { type: 'CREATE_POST_FAILURE' }
  | { type: 'UPDATE_POST', payload: Post }
  | { type: 'UPDATE_POST_PENDING' }
  | { type: 'UPDATE_POST_SUCCESS', payload: Post }
  | { type: 'UPDATE_POST_FAILURE' }

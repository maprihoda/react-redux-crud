// @flow
import type { State } from '../types'
import type { PostsState, Posts, Post } from '../types/posts'

export function selectPosts(state: State): PostsState {
  return state.entities.posts
}

export function selectCurrentPost(state: State, id: number): Post | void {
  const items: Posts = state.entities.posts.items
  return items.find(item => item.id === id)
}

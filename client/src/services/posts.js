// @flow

import type { Posts, Post } from '../types/posts'

import service from './Api'

export function fetchPostsFromApi(): Promise<Posts> {
  return service.get('/posts')
}

export function deletePostFromApi(id: number): Promise<number> {
  return service.delete(`/posts/${id}`)
}

export function createtPostInAPI(payload: Post): Promise<Post> {
  return service.post('/posts', payload)
}

export function updatePostInAPI(payload: Post): Promise<Post> {
  const { id, ...rest } = payload

  return service.patch(`/posts/${id}`, rest)
}

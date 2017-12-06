import service from './Api'

export function fetchPostsFromApi() {
  return service.get(
    '/posts',
    data => data
  )
}

export function deletePostFromApi(id) {
  return service.delete(
    `/posts/${id}`,
    data => data
  )
}

export function createtPostInAPI(payload) {
  return service.post(
    '/posts',
    payload,
    data => data
  )
}

export function updatePostInAPI(payload) {
  const { id, ...rest } = payload

  return service.patch(
    `/posts/${id}`,
    rest,
    data => data
  )
}

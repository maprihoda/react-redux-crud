export function selectPosts(state) {
  return state.entities.posts
}

export function selectCurrentPost(state, id) {
  const items = state.entities.posts.items
  return items.find(item => item.id === parseInt(id, 10))
}

import * as types from '../actionTypes'

function posts(state = { items: [], loading: false }, action) {
  switch (action.type) {
    case types.FETCH_POSTS_PENDING:
    case types.DELETE_POST_PENDING:
    case types.CREATE_POST_PENDING:
    case types.UPDATE_POST_PENDING:
      return {
        ...state,
        loading: true
      }
    case types.FETCH_POSTS_SUCCESS:
      return {
        items: action.payload.reverse(),
        loading: false
      }
    case types.FETCH_POSTS_FAILURE:
      return {
        items: [],
        loading: false
      }
    case types.DELETE_POST_SUCCESS:
      return {
        items: state.items.filter(
          post => post.id !== action.id
        ),
        loading: false
      }
    case types.CREATE_POST_SUCCESS:
      return {
        items: [action.payload].concat(state.items),
        loading: false
      }
    case types.UPDATE_POST_SUCCESS:
      const { id, ...rest } = action.payload

      return {
        items: state.items.map(post => {
          if (post.id === id) {
            return { ...post, ...rest }
          }
          return post
        }),
        loading: false
      }
    case types.CREATE_POST_FAILURE:
    case types.DELETE_POST_FAILURE:
    case types.UPDATE_POST_FAILURE:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default posts

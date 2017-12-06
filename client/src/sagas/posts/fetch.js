import { takeLatest, put, call, select } from 'redux-saga/effects'
import * as types from '../../actionTypes'
import { fetchPostsFromApi } from '../../services/posts'
import navigateTo from '../../services/navigation'
import { selectPosts } from '../../selectors/posts'

function* fetchPosts() {
  yield put({ type: types.FETCH_POSTS_PENDING })

  try {
    const postsFromApi = yield call(fetchPostsFromApi)
    yield put({ type: types.FETCH_POSTS_SUCCESS, payload: postsFromApi })
  } catch (error) {
    yield put({ type: types.FETCH_POSTS_FAILURE })
    console.error(error)
    yield put(navigateTo('/error'))
  }
}

export function* watchFetchPosts() {
  yield takeLatest(types.FETCH_POSTS, fetchPosts)
}

function* fetchPostsIfNeeded() {
  const { items: posts} = yield select(selectPosts)
  if (posts.length === 0) {
    yield call(fetchPosts)
  }
}

export function* watchFetchPostsIfNeeded() {
  yield takeLatest(types.FETCH_POSTS_IF_NEEDED, fetchPostsIfNeeded)
}



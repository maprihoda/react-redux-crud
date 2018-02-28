import { takeLatest, put, call, select } from 'redux-saga/effects'
import { fetchPostsFromApi } from '../../services/posts'
import navigateTo from '../../services/navigation'
import { selectPosts } from '../../selectors/posts'

function* fetchPosts() {
  yield put({ type: 'FETCH_POSTS_PENDING' })

  try {
    const postsFromApi = yield call(fetchPostsFromApi)
    yield put({ type: 'FETCH_POSTS_SUCCESS', payload: postsFromApi })
  } catch (error) {
    yield put({ type: 'FETCH_POSTS_FAILURE' })
    console.error(error) // eslint-disable-line
    yield put(navigateTo('/error'))
  }
}

export function* watchFetchPosts() {
  yield takeLatest('FETCH_POSTS', fetchPosts)
}

function* fetchPostsIfNeeded() {
  const { items: posts } = yield select(selectPosts)
  if (posts.length === 0) {
    yield call(fetchPosts)
  }
}

export function* watchFetchPostsIfNeeded() {
  yield takeLatest('FETCH_POSTS_IF_NEEDED', fetchPostsIfNeeded)
}

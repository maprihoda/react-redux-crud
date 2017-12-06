import { takeLatest, put, call } from 'redux-saga/effects'
import { deletePostFromApi } from '../../services/posts'
import * as types from '../../actionTypes'
import navigateTo from '../../services/navigation'

function* deletePost(action) {
  yield put({ type: types.DELETE_POST_PENDING, id: action.id })

  try {
    const { count } = yield call(deletePostFromApi, action.id)
    if (count !== 1) throw new Error('API delete request failed');
    yield put({ type: types.DELETE_POST_SUCCESS, id: action.id })
  } catch (error) {
    yield put({ type: types.DELETE_POST_FAILURE })
    console.error(error)
    yield put(navigateTo('/error'))
  }
}

export default function* watchDeletePost() {
  yield takeLatest(types.DELETE_POST, deletePost)
}

import { takeLatest, put, call } from 'redux-saga/effects'
import { updatePostInAPI } from '../../services/posts'
import * as types from '../../actionTypes'
import navigateTo from '../../services/navigation'

function* updatePost(action) {
  yield put({ type: types.UPDATE_POST_PENDING })

  try {
    const updatedPost = yield call(updatePostInAPI, action.payload)
    yield put({ type: types.UPDATE_POST_SUCCESS, payload: updatedPost })
    navigateTo('/admin/posts')
  } catch (error) {
    yield put({ type: types.UPDATE_POST_FAILURE })
    console.error(error)
    yield put(navigateTo('/error'))
  }
}

export default function* watchUpdatePost() {
  yield takeLatest(types.UPDATE_POST, updatePost)
}

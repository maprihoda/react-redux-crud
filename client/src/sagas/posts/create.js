import { takeLatest, put, call } from 'redux-saga/effects'
import { createtPostInAPI } from '../../services/posts'
import * as types from '../../actionTypes'
import navigateTo from '../../services/navigation'

function* createPost(action) {
  yield put({ type: types.CREATE_POST_PENDING })

  try {
    const newPost = yield call(createtPostInAPI, action.payload)
    yield put({ type: types.CREATE_POST_SUCCESS, payload: newPost })
    navigateTo('/admin/posts')
  } catch (error) {
    yield put({ type: types.CREATE_POST_FAILURE })
    console.error(error)
    yield put(navigateTo('/error'))
  }
}

export default function* watchCreatePost() {
  yield takeLatest(types.CREATE_POST, createPost)
}

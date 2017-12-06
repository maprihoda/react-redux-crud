import { all } from 'redux-saga/effects'
import { watchFetchPostsIfNeeded, watchFetchPosts } from './posts/fetch'
import watchDeletePost from './posts/delete'
import watchCreatePost from './posts/create'
import watchUpdatePost from './posts/update'

export default function* rootSaga() {
  yield all([
    watchFetchPostsIfNeeded(),
    watchFetchPosts(),
    watchDeletePost(),
    watchCreatePost(),
    watchUpdatePost()
  ])
}

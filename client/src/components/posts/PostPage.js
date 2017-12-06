import React from 'react'
import { connect } from 'react-redux'
import { selectCurrentPost } from '../../selectors/posts'

function PostPage({ post }) {
  return (
    <div>
    {
      post && (
        <div>
          <h2>{post.title}</h2>
          <div>{post.body}</div>
        </div>
      )
    }
    </div>
  )
}

export default connect(
  (state, ownProps) => {
    const post = selectCurrentPost(state, ownProps.match.params.id)
    return { post }
  }
)(PostPage)

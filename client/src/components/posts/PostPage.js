// @flow

import React from 'react'
import { connect } from 'react-redux'
import { selectCurrentPost } from '../../selectors/posts'

import type { Connector } from 'react-redux'
import type { State, Dispatch } from '../../types'
import type { Post } from '../../types/posts'

type Props = {
  post: Post
}

type OwnProps = {
  match: {
    params: {
      id: number
    }
  }
}

function PostPage({ post }: Props) {
  return (
    <div>
      {post && (
        <div>
          <h2>{post.title}</h2>
          <div>{post.body}</div>
        </div>
      )}
    </div>
  )
}

function mapStateToProps(state: State, ownProps: OwnProps) {
  const post = selectCurrentPost(state, Number(ownProps.match.params.id))
  return {
    post
  }
}

// https://github.com/flowtype/flow-typed/issues/1269
// eslint-disable-next-line no-unused-vars
function mapDispatchToProps(dispatch: Dispatch) {
  return {}
}

const connector: Connector<OwnProps, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connector(PostPage)

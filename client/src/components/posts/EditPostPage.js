// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import navigateTo from '../../services/navigation'
import { UPDATE_POST } from '../../actionTypes'
import { selectCurrentPost } from '../../selectors/posts'
import PostForm from './PostForm'

import type { Connector } from 'react-redux'
import type { State, Dispatch } from '../../types'
import type { Post, PostPayload as Payload } from '../../types/posts'

type Props = {
  post: Post,
  updatePost(payload: Payload): void
}

type OwnProps = {
  match: {
    params: {
      id: number
    }
  }
}

class EditPostPage extends Component<Props> {
  handleSubmit = (payload: Payload) => {
    const { id } = this.props.post
    payload = { ...payload, id }
    this.props.updatePost(payload)
    navigateTo('/admin/posts')
  }

  render() {
    const { post } = this.props

    return (
      <div>
        <h2>Edit post</h2>
        {post && <PostForm post={post} onSubmit={this.handleSubmit} />}
      </div>
    )
  }
}

function mapStateToProps(state: State, ownProps: OwnProps) {
  const post = selectCurrentPost(state, Number(ownProps.match.params.id))
  return {
    post
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    updatePost: (payload: Payload) => dispatch({ type: UPDATE_POST, payload })
  }
}

const connector: Connector<OwnProps, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connector(EditPostPage)

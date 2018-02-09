import React, { Component } from 'react'
import { connect } from 'react-redux'
import navigateTo from '../../services/navigation'
import { UPDATE_POST } from '../../actionTypes'
import { selectCurrentPost } from '../../selectors/posts'
import PostForm from './PostForm'

class EditPostPage extends Component {
  handleSubmit = (payload) => {
    const { id } = this.props.post
    payload = { ...payload, id }
    this.props.dispatch({ type: UPDATE_POST, payload })
    navigateTo('/admin/posts')
  }

  render() {
    const { post } = this.props

    return (
      <div>
        <h2>Edit post</h2>
        { post && (
            <PostForm post={post} onSubmit={this.handleSubmit}/>
          )
        }
      </div>
    )
  }
}

export default connect(
  (state, ownProps) => {
    const post = selectCurrentPost(state, ownProps.match.params.id)
    return { post }
  }
)(EditPostPage)

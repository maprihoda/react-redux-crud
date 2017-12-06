import React, { Component } from 'react'
import { connect } from 'react-redux'
import navigateTo from '../../services/navigation'
import { CREATE_POST } from '../../actionTypes'
import PostForm from './PostForm'

class NewPostPage extends Component {
  handleSubmit = (payload) => {
    this.props.dispatch({ type: CREATE_POST, payload })
    navigateTo('/admin/posts')
  }

  render() {
    return (
      <div>
        <h2>Create new post</h2>
        <PostForm onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default connect()(NewPostPage)

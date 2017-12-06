import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FETCH_POSTS_IF_NEEDED, FETCH_POSTS, DELETE_POST } from '../../actionTypes'
import { selectPosts } from '../../selectors/posts'
import navigateTo from '../../services/navigation'
import PostsHeading from './PostsHeading'
import PostsList from './PostsList'

class PostsPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: FETCH_POSTS_IF_NEEDED })
  }

  handleDeletePost = (id) => {
    if (window.confirm('Do you really want to delete this post?')) {
      this.props.dispatch({ type: DELETE_POST, id })
    }
  }

  handleNewPost = () => {
    const { url } = this.props.match
    navigateTo(`${url}/new`)
  }

  handleEditPost = (id) => {
    const { url } = this.props.match
    navigateTo(`${url}/${id}/edit`)
  }

  handleReloadPosts = () => {
    this.props.dispatch({ type: FETCH_POSTS })
  }

  render() {
    const { items: posts, loading } = this.props.posts
    const { url } = this.props.match

    return (
      <div>
        <PostsHeading
          loading={loading}
          posts={posts}
          onNewPost={this.handleNewPost}
          onReloadPosts={this.handleReloadPosts}
        />

        <PostsList
          loading={loading}
          posts={posts}
          url={url}
          onEditPost={this.handleEditPost}
          onDeletePost={this.handleDeletePost}
        />
      </div>
    )
  }
}

export default connect(
  state => ({ posts: selectPosts(state) })
)(PostsPage)

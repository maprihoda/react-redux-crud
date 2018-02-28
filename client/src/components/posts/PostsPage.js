// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  FETCH_POSTS_IF_NEEDED,
  FETCH_POSTS,
  DELETE_POST
} from '../../actionTypes'
import { selectPosts } from '../../selectors/posts'
import navigateTo from '../../services/navigation'
import PostsHeading from './PostsHeading'
import PostsList from './PostsList'

import type { Dispatch, State } from '../../types'
import type { PostsState } from '../../types/posts'
import type { Connector } from 'react-redux'

type Props = {
  posts: PostsState,
  match: {
    url: string
  },
  fetchPostsIfNeeded(): void,
  deletePost(id: number): void,
  fetchPosts(): void
}

class PostsPage extends Component<Props> {
  componentDidMount() {
    this.props.fetchPostsIfNeeded()
  }

  handleDeletePost = (id: number) => {
    if (window.confirm('Do you really want to delete this post?')) {
      this.props.deletePost(id)
    }
  }

  handleNewPost = () => {
    const { url } = this.props.match
    navigateTo(`${url}/new`)
  }

  handleEditPost = (id: number) => {
    const { url } = this.props.match
    navigateTo(`${url}/${id}/edit`)
  }

  handleReloadPosts = () => {
    this.props.fetchPosts()
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

function mapStateToProps(state: State) {
  return {
    posts: selectPosts(state)
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    fetchPostsIfNeeded: () => dispatch({ type: FETCH_POSTS_IF_NEEDED }),
    deletePost: (id: number) => dispatch({ type: DELETE_POST, id }),
    fetchPosts: () => dispatch({ type: FETCH_POSTS })
  }
}

const connector: Connector<{}, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connector(PostsPage)

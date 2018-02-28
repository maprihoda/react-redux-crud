// @flow

import React from 'react'
import { Link } from 'react-router-dom'

import type { Posts } from '../../types/posts'

type Props = {
  loading: boolean,
  posts: Posts,
  url: string,
  onEditPost: (id: number) => void,
  onDeletePost: (id: number) => void
}

export default function PostsList(props: Props) {
  const { loading, posts, url, onEditPost, onDeletePost } = props

  if (loading) return <p>Loading...</p>
  if (posts.length === 0) return <div>No posts.</div>

  return (
    <ul className="posts">
      {posts.map(post => (
        <li className="posts__item" key={post.id}>
          <Link className="posts__title" to={`${url}/${post.id}`}>
            {post.title}
          </Link>
          <button
            className="btn posts__btn"
            onClick={() => onEditPost(post.id)}
            title="Edit"
          >
            <i className="fa fa-pencil-square-o" />
          </button>
          <button
            className="btn posts__btn"
            onClick={() => onDeletePost(post.id)}
            title="Delete"
          >
            <i className="fa fa-trash-o" />
          </button>
        </li>
      ))}
    </ul>
  )
}

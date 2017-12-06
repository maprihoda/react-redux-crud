import React from 'react';
import { Link } from 'react-router-dom'

export default function PostsList(props) {
  const { loading, posts, url, onEditPost, onDeletePost } = props

  if (loading) return <p>Loading...</p>
  if (posts.length === 0) return <div>No posts.</div>

  return (
    <ul className="posts">
    {
      posts.map(post => (
        <li className="posts__item" key={post.id}>
          <Link
            className="posts__title"
            to={`${url}/${post.id}`}
          >
            {post.title}
          </Link>
          <button
            className="btn posts__btn"
            onClick={() => onEditPost(post.id)}
            title="Edit"
          >
            <i className="fa fa-pencil-square-o"></i>
          </button>
          <button
            className="btn posts__btn"
            onClick={() => onDeletePost(post.id)}
            title="Delete"
          >
            <i className="fa fa-trash-o"></i>
          </button>
        </li>
      ))
    }
    </ul>
  )
}

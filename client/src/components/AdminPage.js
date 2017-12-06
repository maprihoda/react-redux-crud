import React from 'react'
import { Route, Switch, Redirect, Link } from 'react-router-dom'
import PostsPage from './posts/PostsPage'
import NewPostPage from './posts/NewPostPage'
import EditPostPage from './posts/EditPostPage'
import PostPage from './posts/PostPage'

export default function AdminPage({ match: { url } }) {
  return (
    <div>
      <div className="header">
        <div className="container">
          <Link to="/admin" className="header__brand">Admin</Link>
        </div>
      </div>

      <div className="container">
        <Switch>
          <Route exact path={`${url}`} render={() => (
            <Redirect to={`${url}/posts`}/>
          )}/>
          <Route exact path={`${url}/posts`} component={PostsPage}/>
          <Route exact path={`${url}/posts/new`} component={NewPostPage} />
          <Route exact path={`${url}/posts/:id`} component={PostPage} />
          <Route exact path={`${url}/posts/:id/edit`} component={EditPostPage} />
          <Redirect to="/error"/>
        </Switch>
      </div>
    </div>
  )
}

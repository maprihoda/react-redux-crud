// @flow

import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import history from './services/history'
import AdminPage from './components/AdminPage'
import ErrorPage from './components/ErrorPage'

export default function App() {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/admin" />} />
          <Route path="/admin" component={AdminPage} />
          <Route path="/error" component={ErrorPage} />
          <Redirect to="/error" />
        </Switch>
      </div>
    </Router>
  )
}

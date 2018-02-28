// @flow

import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'
import App from './App'
import 'normalize.css/normalize.css'
import 'font-awesome/css/font-awesome.min.css'
import './styles/main.css'
import type { Store } from './types'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
const store: Store = createStore(rootReducer, enhancer)

const element = document.getElementById('root')
if (!element) {
  throw new Error('couldn\'t find element with id root')
}

sagaMiddleware.run(rootSaga)

render(
  <Provider store={store}>
    <div>
      <App />
      {/*<DevTools />*/}
    </div>
  </Provider>,
  element
)

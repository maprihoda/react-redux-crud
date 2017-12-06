import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'
import DevTools from './components/DevTools'
import App from './App'
import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.min.css'
import './styles/main.css'

const sagaMiddleware = createSagaMiddleware()

const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  DevTools.instrument()
)

const store = createStore(rootReducer, enhancer)

sagaMiddleware.run(rootSaga)

render(
  <Provider store={store}>
    <div>
      <App />
      {/*<DevTools />*/}
    </div>
  </Provider>,
  document.getElementById('root')
)

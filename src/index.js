import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import { createBrowserHistory } from 'history'

import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import { Router } from 'react-router-dom'
import thunkMiddleware from 'redux-thunk'

import reducers from './reducers'
import App from './App'

const history = createBrowserHistory()

const store = createStore(reducers, compose(
  applyMiddleware(thunkMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

ReactDOM.render(
  <Provider store={store}>
    <Router history={ history } >
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()

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
import {persistStore, autoRehydrate} from 'redux-persist'

import reducers from './reducers'
import App from './App'

require('dotenv').load()

const history = createBrowserHistory()

let store = null

if (process.env.NODE_ENV === 'development') {
  store = createStore(reducers, undefined, compose(
    autoRehydrate(),
    applyMiddleware(thunkMiddleware)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ))
} else {
  store = createStore(reducers, undefined, compose(
    autoRehydrate(),
    applyMiddleware(thunkMiddleware)
  ))
}

persistStore(store, {
  whitelist: [
    'userName',
    'isPregnant',
    'hasChildren',
    'hasMidwife',
    'dueDate',
    'children',
    'userRewardIds',
    'pointsTotal',
    'sectionIndex'
    // add any keys from state to persist here
  ]
})

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} >
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()

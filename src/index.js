import React from 'react'
import ReactDOM, {render} from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import thunkMiddleware from 'redux-thunk'

import reducers from './reducers'
import App from './App'

const store = createStore(reducers, compose(
  applyMiddleware(thunkMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'))
registerServiceWorker();

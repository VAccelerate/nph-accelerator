import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'

import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import thunkMiddleware from 'redux-thunk'
import {persistStore, autoRehydrate} from 'redux-persist'

import reducers from './reducers'
import App from './App'

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunkMiddleware),
    autoRehydrate(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

persistStore(store, {
  whitelist: [
    //add any keys from state to persist here
  ]
})

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()

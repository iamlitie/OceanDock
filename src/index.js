import React from 'react'

import ReactDom from 'react-dom'

import {
    BrowserRouter as Router,
} from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'

import App from './App'

import 'assets/styles/reset.css'

ReactDom.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    document.getElementById('root')
)
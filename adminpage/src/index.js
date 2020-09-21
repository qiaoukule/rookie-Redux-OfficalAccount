import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from "react-router"
import store from "./redux/store"
//import routes from "ROUTER"
import App from './app'

const MOUNT_NODE = document.getElementById('root')

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    MOUNT_NODE
)
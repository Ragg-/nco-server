/// <reference path="./declarations.d.ts" />

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import appDispatcher from './dispatcher'
import AppStore from './store'
import App from './containers/App/App'

window.addEventListener('DOMContentLoaded', () => {
    const appStore = new AppStore(appDispatcher)

    appDispatcher.dispatch({type: 'COMMENT_UPDATED', entity: null})

    appStore.addListener(() => {
        ReactDOM.render(<App state={appStore.getState()} />, document.getElementById('root'))
    })

    ReactDOM.render(<App state={appStore.getState()} />, document.getElementById('root'))
})

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import appDispatcher from './dispatcher'
import AppStore from './store'
import AppView from './views/AppView/AppView'

window.addEventListener('DOMContentLoaded', () => {
    const appStore = new AppStore(appDispatcher)

    appDispatcher.dispatch({type: 'COMMENT_UPDATED', entity: null})

    appStore.addListener(() => {
        ReactDOM.render(<AppView state={appStore.getState()} />, document.getElementById('root'))
    })

    ReactDOM.render(<AppView state={appStore.getState()} />, document.getElementById('root'))
})

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import AppView from 'views/AppView'

window.addEventListener('DOMContentLoaded', () => {
    console.log('hi')
    ReactDOM.render(<AppView />, document.getElementById('root'))
})

import { createStore } from 'redux'

export default createStore( window.devToolsExtension ? window.devToolsExtension() : undefined)
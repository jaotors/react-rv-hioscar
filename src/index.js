import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import GetQuote from './containers/GetQuote/GetQuote'

function App() {
  return (
    <Provider store={store}>
      <GetQuote />
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
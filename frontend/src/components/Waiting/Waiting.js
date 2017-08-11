import React from 'react'
import './Waiting.css'

class Waiting extends React.Component {
  constructor() {
    super(),
    this.state = {
      visible: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        visible: true
      })
    }, 500)
  }

  render() {
    return(
      <div className={(!this.state.visible) ? 'waitingContainer' : 'waitingContainer active'}>
        <p>Thanks</p>
        <h2>We’re putting together your personalized quote.</h2>
        <p className="loader"></p>
      </div>
    )
  }
}

export default Waiting
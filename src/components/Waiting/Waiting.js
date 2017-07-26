import React from 'react'
import PropTypes from 'prop-types'
import './Waiting.css'

class Waiting extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.setValueComponent("doneComponent", true)
    }, 3000)
  }

  render() {
    return(
      <div className="waiting-container">
        <p>Thanks</p>
        <h2>We’re putting together your personalized quote.</h2>
        <p className="loader"></p>
      </div>
    )
  }
}

Waiting.propTypes = {
  setValueComponent: PropTypes.func
}

export default Waiting
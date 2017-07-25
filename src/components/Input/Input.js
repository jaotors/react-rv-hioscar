import React from 'react'
import PropTypes from 'prop-types'
import './Input.css'

class Input extends React.Component {
  constructor() {
    super(),
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleKeyPress(e) {
    if(isNaN(e.key)) {
      e.preventDefault()
    }
  }

  render() {
    return (
      <input id={this.props.id} onChange={this.props.handleChange} value={this.props.value} onKeyPress={this.handleKeyPress} />
    )
  }
}

Input.propTypes = {
  id: PropTypes.string,
  handleChange: PropTypes.func,
}

export default Input
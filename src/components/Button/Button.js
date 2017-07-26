import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

class Button extends React.Component {
  constructor() {
    super(),
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.setValueComponent(this.props.keyVal, true)
  }

  render() {
    return(
      <div className="btn-container">
        <button onClick={this.handleClick} >{this.props.text}</button>
      </div>
    )
  }
}

Button.propTypes = {
  text: PropTypes.string,
  setValueComponent: PropTypes.func
}

export default Button
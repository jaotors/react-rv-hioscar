import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const Button = (props) => {
  return(
    <div className="btn-container">
      <button>{props.text}</button>
    </div>
  )
}

Button.propTypes = {
  text: PropTypes.string
}

export default Button
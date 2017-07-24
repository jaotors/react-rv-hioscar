import React from 'react'
import PropTypes from 'prop-types'
import './Input.css'

const Input = (props) => {
  return (
    <input id={props.id} type={props.type} onChange={props.handleChange} onKeyPress={props.handleKeyPress} min="0" />
  )
}

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  handleChange: PropTypes.func,
  handleKeyPress: PropTypes.func
}

export default Input
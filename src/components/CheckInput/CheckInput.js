import React from 'react'
import PropTypes from 'prop-types'
import './CheckInput.css'

const CheckInput = (props) => {
  return(
    <label className="check-container" htmlFor={props.id}>
      <input onChange={props.handleChange} type="checkbox" id={props.id} name={props.name} />
      <span className="check-label-container">
        <span className="check-label">{props.checkLabel}</span>
        <span className="check-example">{props.checkExample}</span>
      </span>
    </label>
  )
}

CheckInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  checkLabel: PropTypes.string,
  checkExample: PropTypes.string,
  handleChange: PropTypes.func,
}

export default CheckInput
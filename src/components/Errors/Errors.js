import React from 'react';
import PropTypes from 'prop-types'
import './Errors.css'

const Errors = (props) => {
  return (
    <div>
      <ul className="errors">
        {
          props.errors.map((err, index) => {
            return <li key={err + index}>{err}</li>
          })
        }
      </ul>
    </div>
  )
}

Errors.propTypes = {
  errors: PropTypes.array
}

export default Errors
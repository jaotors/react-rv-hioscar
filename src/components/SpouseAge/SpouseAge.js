import React from 'react'
import PropTypes from 'prop-types'
import Input from '../Input/Input'

const SpouseAge = (props) => {
  return (
    <span>
      {(props.coverSelect === 3  ? ', my spouse is' : ' and my spouse is')}
      <Input id="spouseAge" type="number" handleChange={props.handleChange} />
    </span>
  )
}

SpouseAge.propTypes = {
  coverSelect: PropTypes.number,
  handleChange: PropTypes.func
}

export default SpouseAge
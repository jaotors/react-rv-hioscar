import React from 'react'
import Input from '../Input/Input'

const SpouseAge = (props) => {
  return (
    <span>
      {(props.coverSelect == 3  ? ', my spouse is' : ' and my spouse is')}
      <Input id="spouseAge" handleChange={props.handleChange} />
    </span>
  )
}

export default SpouseAge
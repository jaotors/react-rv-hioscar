import React from 'react'

const Input = (props) => {
  return (
    <input id={props.id} type="text" onChange={props.handleChange} />
  )
}

export default Input
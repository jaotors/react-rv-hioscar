import React from 'react'
import { FadeInUp } from 'animate-css-styled-components'
import { connect } from 'react-redux'
import './Done.css'

const Done = (props) => {
  return(
    <FadeInUp duration="0.5s" delay="0.5s" >
      <div className="doneContainer">
        {
          props.message.map((msg, index) => {
            return (
              <p key={index}>{msg}</p>
            )
          })
        }
      </div>
    </FadeInUp>
  )
}

export default connect(
  state => ({
    message: state.component.message
  })
)(Done)
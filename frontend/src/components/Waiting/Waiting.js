import React from 'react'
import { FadeInUp } from 'animate-css-styled-components'
import './Waiting.css'

const Waiting = () => {
  return(
    <FadeInUp duration="0.5s" delay="0.5s" >
      <div className="waitingContainer">
        <p>Thanks</p>
        <h2>We’re putting together your personalized quote.</h2>
        <p className="loader"></p>
      </div>
    </FadeInUp>
  )
}

export default Waiting
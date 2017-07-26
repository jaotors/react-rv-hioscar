import React from 'react'
import './Done.css'

const Done = (props) => {
  return(
    <div className="done-container">
      <p>This is important!</p>
      <p>Based on your income, you may qualify for a Essential Health Plan from the New York State of Health (NYSoH). For more information on Essential Health Plans, please visit NYSoH at <a href="#">nystateofhealth.ny.gov</a></p>
      <p>Your age qualifies you for Medicare. Oscar does not offer Medicare policies, but our partner, GoHealth, can help you enroll in a Medicare policy offered in your area at 855-786-2825 or at <a href="#">gohealth.com/oscar</a>.</p>
    </div>
  )
}

export default Done
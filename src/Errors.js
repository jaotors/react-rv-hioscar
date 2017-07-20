import React from 'react';

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

export default Errors
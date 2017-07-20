import React from 'react'

class Income extends React.Component {
  render() {
    let count = []
    for(let i = 0; i < 9; i++) {
      let val = i
      if (val === 8) val += '+'
      count = count.concat(val)
    }

    return (
      <div>
        <p>I make P 
          <input type="text" /> yearly with 
          <select defaultValue="0">
            {
              count.map(c => {
                return <option key={c} value={c} disabled={c !== 0 ? false : true }>{c !== 0 ? c : '' }</option>
              })
            }
          </select>
          people in my tax household.
        </p>
      </div>
    )
  }
}

export default Income
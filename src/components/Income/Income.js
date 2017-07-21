import React from 'react'
import Input from '../Input/Input'

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
          <Input id="income" handleChange={this.props.handleChange} /> yearly with 
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
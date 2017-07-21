import React from 'react'

class KidSelect extends React.Component {
  constructor() {
    super(),
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.kidsSelectChange(e)
    this.props.arrayChange(e.target.value)
  }

  render() {
    let count = []
    for(let i = 0; i < 10; i++) {
      count = count.concat(i)
    }

    return (
      <select defaultValue="0" onChange={this.handleChange}>
        {
          count.map(c => {
            return <option key={c} value={c} disabled={c !== 0 ? false : true }>{c !== 0 ? c : '' }</option>
          })
        }
      </select>
    )
  }
}

export default KidSelect
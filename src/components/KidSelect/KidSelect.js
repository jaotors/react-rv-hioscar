import React from 'react'
import PropTypes from 'prop-types'

class KidSelect extends React.Component {
  constructor() {
    super(),
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.setValueComponent("kidsInput", parseInt(e.target.value))
    this.props.kidsAgeChange(e)
  }

  render() {
    let count = []
    for(let i = 0; i < 10; i++) {
      count = count.concat(i)
    }

    return (
      <select defaultValue={this.props.kidsSelect} onChange={this.handleChange}>
        {
          count.map(c => {
            return <option key={c} value={c} disabled={c !== 0 ? false : true }>{c !== 0 ? c : '' }</option>
          })
        }
      </select>
    )
  }
}

KidSelect.propTypes = {
  setValueComponent: PropTypes.func,
  kidsAgeChange: PropTypes.func,
}

export default KidSelect
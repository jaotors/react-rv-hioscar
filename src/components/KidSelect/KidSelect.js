import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { hasKidsInputChange } from './action'

class KidSelect extends React.Component {
  constructor() {
    super(),
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const { onHasKidsInputChange, kidsAgeChange } = this.props
    onHasKidsInputChange(parseInt(e.target.value))
    kidsAgeChange(e.target.value)
  }

  render() {
    let count = []
    for(let i = 0; i < 10; i++) {
      count = count.concat(i)
    }

    return (
      <select defaultValue={this.props.kidsInput} onChange={this.handleChange}>
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
  kidsInput: PropTypes.number,
  kidsAgeChange: PropTypes.func,
  onHasKidsInputChange: PropTypes.func,
}

export default connect(
  state => ({ kidsInput: state.ageInput.kidsInput}),
  dispatch => ({
    onHasKidsInputChange: (input) => dispatch(hasKidsInputChange(input))
  })
)(KidSelect)
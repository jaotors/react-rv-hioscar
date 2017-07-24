import React from 'react'
import PropTypes from 'prop-types'
import Input from '../Input/Input'
import Errors from '../Errors/Errors'

class Income extends React.Component {
  constructor() {
    super(),
    this.state = {
      errors: [],
      errCodes: [
        `Valid income value is required to get a quote`
      ]
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.selectChange = this.selectChange.bind(this)
  }

  selectChange(e) {
    const value = parseInt(e.target.value)
    if(value !== 0) {
      this.props.selectIncomePassChange(true)
    }
  }

  handleKeyPress(e) {
    const reg = /([^0-9])+/g
    if(reg.test(e.key)) {
      e.preventDefault()
    }
  }

  handleChange(e) {
    let errors = this.state.errors
    const {value} = e.target

    if(value.length > 8 || value === '') {
      if(!errors.some(err => err === this.state.errCodes[0])) errors = errors.concat(this.state.errCodes[0])
      this.props.incomePassChange(false)
    } else {
      errors = errors.filter(err => err !== this.state.errCodes[0])
      this.props.incomePassChange(true)
    }


    this.setState({
      errors
    })
  }

  render() {
    let count = []
    for(let i = 0; i < 9; i++) {
      let val = i
      count = count.concat(val)
    }

    return (
      <div>
        <p>I make P 
          <Input id="income" type="text" handleChange={this.handleChange} handleKeyPress={this.handleKeyPress} /> yearly with 
          <select defaultValue="0" onChange={this.selectChange}>
            {
              count.map(c => {
                return <option key={c} value={c} disabled={c !== 0 ? false : true }>{c !== 0 ? (c === 8 ? `${c}+` : c) : '' }</option>
              })
            }
          </select>
          people in my tax household.
        </p>
        <Errors errors={this.state.errors}/>
      </div>
    )
  }
}

Income.propTypes = {
  incomePassChange: PropTypes.func,
  selectIncomePassChange: PropTypes.func
}

export default Income
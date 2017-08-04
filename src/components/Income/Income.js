import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Input from '../Input/Input'
import Errors from '../Errors/Errors'
import Button from '../Button/Button'
import {  } from './action'
import styles from './Income.css'

class Income extends React.Component {
  constructor() {
    super(),
    this.state = {
      errors: [],
      errCodes: [
        `Valid income value is required to get a quote`
      ],
      visible: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.selectChange = this.selectChange.bind(this)
  }

  componentWillMount() {
    this.props.setValueComponent('selectIncomePass', false)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        visible: 500
      })
    }, 500)
  }

  selectChange(e) {
    const value = parseInt(e.target.value)
    if(value !== 0) {
      this.props.setValueComponent('selectIncomePass', true)
    }
  }

  handleChange(e) {
    let errors = this.state.errors
    const {value} = e.target

    if(value.length > 8 || value === '') {
      if(!errors.some(err => err === this.state.errCodes[0])) errors = errors.concat(this.state.errCodes[0])
      this.props.setValueComponent("incomePass",false)
    } else {
      errors = errors.filter(err => err !== this.state.errCodes[0])
      this.props.setValueComponent("incomePass",true)
    }

    const setError = errors.length < 1 ? true : false
    this.props.setValueComponent("globalError",setError)

    this.props.setValueComponent("income",value)
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
      <div className={(!this.state.visible) ? 'incomeContainer' : 'incomeContainer active'}>
        <p>I make P 
          <Input id="income" handleChange={this.handleChange} value={this.props.income} /> yearly with 
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
        {(this.props.selectIncomePass && this.props.incomePass && this.props.globalError && (!this.props.checkComponent) &&
          <Button setValueComponent={this.props.setValueComponent} keyVal="checkComponent" text="Next" />)}
      </div>
    )
  }
}

Income.propTypes = {
  income: PropTypes.string,
  selectIncomePass: PropTypes.bool,
  incomePass: PropTypes.bool,
  globalError: PropTypes.bool,
  checkComponent: PropTypes.bool,
  setValueComponent: PropTypes.func,
}

export default connect(
  state => ({ globalError: state.globalError.error, income: state.income }),
  dispatch => ({
    onIncomeChange: (value) => dispatch(income(value)),
    onSelectIncomePassChange: (value) => dispatch(selectIncomePass(value)),
    onIncomePassChange: (value) => dispatch(incomePass(value))
  })
)(Income)
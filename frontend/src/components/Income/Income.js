import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Input from '../Input/Input'
import Errors from '../Errors/Errors'
import Button from '../Button/Button'
import { addGlobalErr, removeGlobalErr } from '../../redux/modules/globalError'
import { changeCheck } from '../../redux/modules/component'
import { selectIncomePass, incomePass, income } from './action'
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
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount() {
    this.props.onSelectIncomePassChange(false)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        visible: true
      })
    }, 500)
  }

  selectChange(e) {
    const value = parseInt(e.target.value)
    if(value !== 0) {
      this.props.onSelectIncomePassChange(true)
    }
  }

  handleChange(e) {
    const {
      income,
      onIncomeChange,
      onSelectIncomePassChange,
      onIncomePassChange,
      onAddGlobalError,
      onRemoveGlobalError
    } = this.props
    const {value} = e.target
    let {errors, errCodes} = this.state

    if(value.length > 8 || value === '') {
      if(!errors.some(err => err === errCodes[0])) {
        errors = errors.concat(errCodes[0])
        onAddGlobalError(errCodes[0])
      }
      onIncomePassChange(false)
    } else {
      errors = errors.filter(err => err !== errCodes[0])
      onRemoveGlobalError(errCodes[0])
      onIncomePassChange(true)
    }
    
    onIncomeChange(value)
    this.setState({
      errors
    })
  }

  handleClick() {
    this.props.onChangeCheck(true)
  }

  render() {
    let count = []
    for(let i = 0; i < 9; i++) {
      let val = i
      count = count.concat(val)
    }

    const {
      checkComponent,
      income,
      globalError
    } = this.props

    return (
      <div className={(!this.state.visible) ? 'incomeContainer' : 'incomeContainer active'}>
        <p>I make P 
          <Input id="income" handleChange={this.handleChange} /> yearly with 
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
        {(income.selectIncomePass && income.incomePass && (globalError.length < 1) && (!checkComponent) &&
          <Button handleClick={this.handleClick} text="Next" />)}
      </div>
    )
  }
}

Income.propTypes = {
  income: PropTypes.object,
  checkComponent: PropTypes.bool,
  onIncomeChange: PropTypes.func,
  globalError: PropTypes.array,
  onSelectIncomePassChange: PropTypes.func,
  onIncomePassChange: PropTypes.func,
  onAddGlobalError: PropTypes.func,
  onRemoveGlobalError: PropTypes.func,
  onChangeCheck: PropTypes.func,
}

export default connect(
  state => ({
    checkComponent: state.component.checkComponent,
    income: state.income,
    globalError: state.globalError.error,
  }),
  dispatch => ({
    onIncomeChange: (value) => dispatch(income(value)),
    onSelectIncomePassChange: (value) => dispatch(selectIncomePass(value)),
    onIncomePassChange: (value) => dispatch(incomePass(value)),
    onAddGlobalError: (error) => dispatch(addGlobalErr(error)),
    onRemoveGlobalError: (error) => dispatch(removeGlobalErr(error)),
    onChangeCheck: (value) => dispatch(changeCheck(value)),
  })
)(Income)
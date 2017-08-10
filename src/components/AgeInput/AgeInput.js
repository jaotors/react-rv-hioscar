import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Input from '../Input/Input'
import SpouseAge from '../SpouseAge/SpouseAge'
import KidsAge from '../KidsAge/KidsAge'
import Errors from '../Errors/Errors'
import { agesChange, hasErrorChange, asyncVisibleChange } from './action'
import { addGlobalErr, removeGlobalErr } from '../../redux/modules/globalError'

import './AgeInput.css'

class AgeInput extends React.Component {
  constructor() {
    super(),
    this.state = {
      errors: [],
      errCodes: [
        `Your age is required`,
        `Hey youngster, you have to be 18 or older to sign up with Oscar`,
        `Your spouse's age is requried`,
        `Your spouse needs to be at least 18 years old`,
        `All ages are requried`
      ],
      kidsAges: [],
      visible: false
    }
    this.replaceText = this.replaceText.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.kidsAgeChange = this.kidsAgeChange.bind(this)
  }

  componentWillMount() {
    let ages = this.props.ages
    const { coverInput, onAddGlobalError } = this.props
    let {errors, errCodes, kidsAges} = this.state
    if(!errors.some(err => err === errCodes[0])) {
      errors = errors.concat(errCodes[0])
      onAddGlobalError(errCodes[0])
    }

    if(coverInput === 2 || coverInput === 3) {
      ages = Object.assign({}, ages, {spouseAge: ''})
      if(!errors.some(err => err === errCodes[2])) {
        errors = errors.concat(errCodes[2])
        onAddGlobalError(errCodes[2])
      }
    }

    if(coverInput === 3 || coverInput === 4) {
      ages = Object.assign({}, ages, {kidsAges: kidsAges})
      if(!errors.some(err => err === errCodes[4])) {
        errors = errors.concat(errCodes[4])
        onAddGlobalError(errCodes[4])
      }
    }

    this.props.onAgesChange(ages)
    this.setState({
      errors
    })
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        visible: true
      })
    }, 500)
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.coverInput !== this.props.coverInput) {
      let ages = this.props.ages
      const { 
        onAddGlobalError,
        onRemoveGlobalError,
        onAgesChange,
        onHasErrorChange,
        coverInput
      } = this.props

      const { errCodes, kidsAges } = this.state
      let errors = []
      onRemoveGlobalError(errCodes[0])
      if(ages.myAge === '') {
        onAddGlobalError(errCodes[0])
        if(!errors.some(err => err === errCodes[0])) {
          errors = errors.concat(errCodes[0])
        }
      }

      switch(coverInput) {
        case 1:
          ages.spouseAge = undefined
          ages.kidsAges = undefined
          onRemoveGlobalError(this.state.errCodes[2])
          onRemoveGlobalError(this.state.errCodes[4])
          break
        case 2:
          ages.kidsAges = undefined
          onRemoveGlobalError(this.state.errCodes[4])
          break
        case 4:
          ages.spouseAge = undefined
          onRemoveGlobalError(this.state.errCodes[2])
          break
      }

      if(coverInput === 2 || coverInput === 3) {
        if(ages.spouseAge === undefined) ages = Object.assign({}, ages, {spouseAge: ''})
        if(ages.spouseAge === '') {
          if(!errors.some(err => err === errCodes[2])) {
            errors = errors.concat(errCodes[2])
            onAddGlobalError(errCodes[2])
          }
        }
      }

      if(coverInput === 3 || coverInput === 4) {
        if(ages.kidsAges === undefined) ages = Object.assign({}, ages, {kidsAges: kidsAges})
        if(ages.kidsAges.some(kids => kids === '') || ages.kidsAges.length < 1) {
          if(!errors.some(err => err === errCodes[4])) {
            errors = errors.concat(errCodes[4])
            onAddGlobalError(errCodes[4])
          }
        }
      }

      onAgesChange(ages)
      this.setState({
        errors: errors,
        kidsAges: (ages.kidsAges === undefined) ? [] : ages.kidsAges
      })
    }
  }

  kidsAgeChange(e) {
    const value = parseInt(e.target.value)
    let kidsAges = this.state.kidsAges
    const {onAgesChange, onRemoveGlobalError, onAddGlobalError, ages} = this.props
    let errors = this.state.errors

    if(kidsAges.length < 1) {
      for(let i = kidsAges.length+1; i<= value; i++) {
        kidsAges = kidsAges.concat('')
      }
    } else {
      if(kidsAges.length < value) {
        for(let i = kidsAges.length; i < value; i++) {
          kidsAges = kidsAges.concat('')
          if(!errors.some(err => err === this.state.errCodes[4])) {
            errors = errors.concat(this.state.errCodes[4])
            onAddGlobalError(this.state.errCodes[4])
          }
        }
      } else {
        kidsAges = kidsAges.slice(0, value)
        if(kidsAges.some(kids => kids !== '')) {
          errors = errors.filter(err => err !== this.state.errCodes[4])
          onRemoveGlobalError(this.state.errCodes[4])
        }
      }
    }

    ages.kidsAges = kidsAges
    this.setState({
      kidsAges,
      errors
    })
    onAgesChange(ages)
  }

  handleChange(e) {
    const {id, value} = e.target
    let { kidsAges, errCodes, errors } = this.state
    let ages = this.props.ages
    const { onAddGlobalError, onRemoveGlobalError, onAgesChange, onHasErrorChange } = this.props

    if(id.substr(0, 4) === 'kids') {
      let kidId = id.substr(id.length-1)
      kidsAges[kidId-1] = value
      ages.kidsAges = kidsAges
    }

    if(kidsAges.length > 0) {
      if(kidsAges.some(kids => kids === '')) {
        if(!errors.some(err => err === errCodes[4])) {
          errors = errors.concat(errCodes[4])
          onAddGlobalError(errCodes[4])
        }
      } else {
        errors = errors.filter(err => err !== errCodes[4])
        onRemoveGlobalError(errCodes[4])
      }
    }

    if(id === 'myAge' || id === 'spouseAge') {
      if(id === 'myAge') {
        ages.myAge = value
        if(value < 18) {
          errors = errors.filter(err => err !== errCodes[0])
          onRemoveGlobalError(errCodes[0])
          if(!errors.some(err => err === errCodes[1])) {
            errors = errors.concat(errCodes[1])
            onAddGlobalError(errCodes[1])
          }
        } else {
          errors = errors.filter(err => err !== errCodes[1])
          onRemoveGlobalError(errCodes[1])
        }

        if(value === '') {
          errors = errors.filter(err => err !== errCodes[1])
          onRemoveGlobalError(errCodes[1])
          if(!errors.some(err => err === errCodes[0])) {
            errors = errors.concat(errCodes[0])
            onAddGlobalError(errCodes[0])
          }
        } else {
          errors = errors.filter(err => err !== errCodes[0])
          onRemoveGlobalError(errCodes[0])
        }
      }

      if(id === 'spouseAge') {
        ages.spouseAge = value
        if(value < 18) {
          errors = errors.filter(err => err !== errCodes[2])
          onRemoveGlobalError(errCodes[2])
          if(!errors.some(err => err === errCodes[3])) {
            errors = errors.concat(errCodes[3])
            onAddGlobalError(errCodes[3])
          }
        } else {
          errors = errors.filter(err => err !== errCodes[3])
          onRemoveGlobalError(errCodes[3])
        }

        if(value === '') {
          errors = errors.filter(err => err !== errCodes[3])
          onRemoveGlobalError(errCodes[3])
          if(!errors.some(err => err === errCodes[2])) {
            errors = errors.concat(errCodes[2])
            onAddGlobalError(errCodes[2])
          }
        } else {
          errors = errors.filter(err => err !== errCodes[2])
          onRemoveGlobalError(errCodes[2])
        }
      }
    }

    if(errors.length < 1) onHasErrorChange()

    this.setState({
      errors,
      kidsAges
    })
    onAgesChange(ages)
  }

  replaceText(index, length) {
    const text = ['.', 'and', ',']
    if(index === length-1) {
      return text[0]
    } else if(index === length-2) {
      return text[1]
    } else {
      return text[2]
    }
  }

  render() {
    const {coverInput, kidsSelect, visible} = this.props
    let kidsInputArr = []
    if(kidsSelect != 0) {
      for(let i = 1; i <= kidsSelect; i++) {
        let id = `kids${i}`
        kidsInputArr = kidsInputArr.concat(id)
      }
    }

    return (
      <div className={(!this.state.visible) ? 'ageContainer' : 'ageContainer active'}>
        <p>
          I'm <Input id="myAge" handleChange={this.handleChange} /> years old 
          {(coverInput != 2 && coverInput != 3) ? '' : 
            <SpouseAge coverInput={coverInput} handleChange={this.handleChange} />}
          {(coverInput != 3 && coverInput != 4) ? '' : 
            <KidsAge 
              kidsInputArr={kidsInputArr}
              replaceText={this.replaceText}
              handleChange={this.handleChange}
              kidsAgeChange={this.kidsAgeChange} />}
        </p>
        <Errors errors={this.state.errors} />
      </div>
    )
  }
}

AgeInput.propTypes = {
  coverInput: PropTypes.number,
  kidsSelect: PropTypes.number,
  ages: PropTypes.object,
  onAgesChange: PropTypes.func,
  onHasErrorChange: PropTypes.func,
  onAddGlobalError: PropTypes.func,
  onRemoveGlobalError: PropTypes.func,
  onAsyncVisibleChange: PropTypes.func,
}

export default connect(
  state => ({
    ages: state.ageInput.ages,
    coverInput: state.selectCover.coverInput,
    kidsSelect: state.ageInput.kidsInput,
    globalError: state.globalError.error,
  }),
  dispatch => ({
    onAgesChange: (ages) => dispatch(agesChange(ages)),
    onHasErrorChange: (value) => dispatch(hasErrorChange(value)),
    onAddGlobalError: (error) => dispatch(addGlobalErr(error)),
    onRemoveGlobalError: (error) => dispatch(removeGlobalErr(error))
  })
)(AgeInput)
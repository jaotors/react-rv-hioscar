import React from 'react'
import PropTypes from 'prop-types'
import Input from '../Input/Input'
import SpouseAge from '../SpouseAge/SpouseAge'
import KidsAge from '../KidsAge/KidsAge'
import Errors from '../Errors/Errors'

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
      kidsAges: []
    }
    this.replaceText = this.replaceText.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.kidsAgeChange = this.kidsAgeChange.bind(this)
  }

  componentWillMount() {
    let ages = this.props.ages
    let errors = []
    if(!errors.some(err => err === this.state.errCodes[0])) errors = errors.concat(this.state.errCodes[0])

    if(this.props.coverSelect === 2 || this.props.coverSelect === 3) {
      ages = Object.assign({}, ages, {spouseAge: ''})
      if(!errors.some(err => err === this.state.errCodes[2])) errors = errors.concat(this.state.errCodes[2])
    }

    if(this.props.coverSelect === 3 || this.props.coverSelect === 4) {
      ages = Object.assign({}, ages, {kidsAges: this.state.kidsAges})
      if(!errors.some(err => err === this.state.errCodes[4])) errors = errors.concat(this.state.errCodes[4])
    }

    this.props.setValueComponent("ages",ages)
    this.setState({
      errors: errors
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.coverSelect !== this.props.coverSelect) {
      let ages = this.props.ages
      let errors = []
      if(ages.myAge === '') {
        if(!errors.some(err => err === this.state.errCodes[0])) errors = errors.concat(this.state.errCodes[0])
      }

      switch(this.props.coverSelect) {
        case 1:
          delete ages.spouseAge
          delete ages.kidsAges
          break
        case 2:
          delete ages.kidsAges
          break
        case 4:
          delete ages.spouseAge
          break
      }

      if(this.props.coverSelect === 2 || this.props.coverSelect === 3) {
        if(ages.spouseAge === undefined) ages = Object.assign({}, ages, {spouseAge: ''})
        if(ages.spouseAge === '') {
          if(!errors.some(err => err === this.state.errCodes[2])) errors = errors.concat(this.state.errCodes[2])
        }
      }

      if(this.props.coverSelect === 3 || this.props.coverSelect === 4) {
        if(ages.kidsAges === undefined) ages = Object.assign({}, ages, {kidsAges: this.state.kidsAges})
        if(ages.kidsAges.some(kids => kids === '') || ages.kidsAges.length < 1) {
          if(!errors.some(err => err === this.state.errCodes[4])) errors = errors.concat(this.state.errCodes[4])
        }
      }

      const setError = errors.length < 1 ? true : false
      this.props.setValueComponent("globalError",setError)

      this.props.setValueComponent("ages",ages)
      this.setState({
        errors: errors
      })
    }
  }

  kidsAgeChange(e) {
    const value = parseInt(e.target.value)
    let kidsAges = this.state.kidsAges
    let ages = this.props.ages
    let errors = this.state.errors

    if(kidsAges.length < 1) {
      for(let i = kidsAges.length+1; i<= value; i++) {
        kidsAges = kidsAges.concat('')
      }
    } else {
      if(kidsAges.length < value) {
        for(let i = kidsAges.length; i < value; i++) {
          kidsAges = kidsAges.concat('')
          if(!errors.some(err => err === this.state.errCodes[4])) errors = errors.concat(this.state.errCodes[4])
        }
      } else {
        kidsAges = kidsAges.slice(0, value)
      }
    }

    const setError = errors.length < 1 ? true : false
    this.props.setValueComponent("globalError",setError)

    ages.kidsAges = kidsAges
    this.setState({
      kidsAges,
      errors
    })
    this.props.setValueComponent("ages",ages)
  }

  handleChange(e) {
    let errors = this.state.errors
    const {id, value} = e.target

    let ages = this.props.ages

    let kidsAges = this.state.kidsAges
    if(id.substr(0, 4) === 'kids') {
      let kidId = id.substr(id.length-1)
      kidsAges[kidId-1] = value
      ages.kidsAges = kidsAges
    }

    if(this.state.kidsAges.length > 1) {
      if(this.state.kidsAges.some(kids => kids === '')) {
        if(!errors.some(err => err === this.state.errCodes[4])) errors = errors.concat(this.state.errCodes[4])
      } else {
        errors = errors.filter(err => err !== this.state.errCodes[4])
      }
    }

    if(id === 'myAge' || id === 'spouseAge') {
      if(id === 'myAge') {
        ages.myAge = value
        if(value < 18) {
          errors = errors.filter(err => err !== this.state.errCodes[0])
          if(!errors.some(err => err === this.state.errCodes[1])) errors = errors.concat(this.state.errCodes[1])
        } else {
          errors = errors.filter(err => err !== this.state.errCodes[1])
        }

        if(value === '') {
          errors = errors.filter(err => err !== this.state.errCodes[1])
          if(!errors.some(err => err === this.state.errCodes[0])) errors = errors.concat(this.state.errCodes[0])
        } else {
          errors = errors.filter(err => err !== this.state.errCodes[0])
        }
      }

      if(id === 'spouseAge') {
        ages.spouseAge = value
        if(value < 18) {
          errors = errors.filter(err => err !== this.state.errCodes[2])
          if(!errors.some(err => err === this.state.errCodes[3])) errors = errors.concat(this.state.errCodes[3])
        } else {
          errors = errors.filter(err => err !== this.state.errCodes[3])
        }

        if(value === '') {
          errors = errors.filter(err => err !== this.state.errCodes[3])
          if(!errors.some(err => err === this.state.errCodes[2])) errors = errors.concat(this.state.errCodes[2])
        } else {
          errors = errors.filter(err => err !== this.state.errCodes[2])
        }
      }
    }

    const setError = errors.length < 1 ? true : false

    this.props.setValueComponent("ageInputError", !setError)
    this.props.setValueComponent("globalError",setError)

    this.setState({
      errors,
      kidsAges: kidsAges
    })
    this.props.setValueComponent("ages",ages)
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
    const {coverSelect, setValueComponent, kidsSelect} = this.props
    let kidsInput = []
    if(kidsSelect != 0) {
      for(let i = 1; i <= kidsSelect; i++) {
        let id = `kids${i}`
        kidsInput = kidsInput.concat(id)
      }
    }

    return (
      <div className="age-container">
        <p>
          I'm <Input id="myAge" handleChange={this.handleChange} /> years old 
          {(coverSelect != 2 && coverSelect != 3) ? '' : 
            <SpouseAge coverSelect={coverSelect} handleChange={this.handleChange} />}
          {(coverSelect != 3 && coverSelect != 4) ? '' : 
            <KidsAge 
              coverSelect={coverSelect}
              kidsSelect={kidsSelect}
              setValueComponent={setValueComponent}
              kidsInput={kidsInput}
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
  coverSelect: PropTypes.number,
  kidsSelect: PropTypes.number,
  ages: PropTypes.object,
  setValueComponent: PropTypes.func,
}

export default AgeInput
import React from 'react'
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
      kidsArr: []
    }
    this.replaceText = this.replaceText.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.kidsArrChange = this.kidsArrChange.bind(this)
  }

  kidsArrChange(value) {
    let arrKids = []
    for(let i = 1; i<= value; i++) {
      arrKids = arrKids.concat('')
    }
    this.setState({
      kidsArr: arrKids
    })
  }

  handleChange(e) {
    let errors = this.state.errors
    const {id, value} = e.target

    let arrKids = this.state.kidsArr
    if(id.substr(0, 4) === 'kids') {
      let kidId = id.substr(id.length-1)
      arrKids[kidId-1] = value
    }

    if(id === 'myAge' || id === 'spouseAge') {
      if(id === 'myAge') {
        if(value === '') {
          if(!errors.some(err => err === this.state.errCodes[0])) errors = errors.concat(this.state.errCodes[0])
        } else {
          errors = errors.filter(err => err !== this.state.errCodes[0])
        }

        if(value < 18) {
          if(!errors.some(err => err === this.state.errCodes[1])) errors = errors.concat(this.state.errCodes[1])
        } else {
          errors = errors.filter(err => err !== this.state.errCodes[1])
        }
      }

      if(id === 'spouseAge') {
        if(value === '') {
          if(!errors.some(err => err === this.state.errCodes[2])) errors = errors.concat(this.state.errCodes[2])
        } else {
          errors = errors.filter(err => err !== this.state.errCodes[2])
        }

        if(value < 18) {
          if(!errors.some(err => err === this.state.errCodes[3])) errors = errors.concat(this.state.errCodes[3])
        } else {
          errors = errors.filter(err => err !== this.state.errCodes[3])
        }
      }
    }

    if(this.state.kidsArr.some(kids => kids === '')) {
      if(!errors.some(err => err === this.state.errCodes[4])) errors = errors.concat(this.state.errCodes[4])
    } else {
      errors = errors.filter(err => err !== this.state.errCodes[4])
    }

    this.setState({
      errors: errors,
      kidsArr: arrKids
    })
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
    const {coverSelect, kidsSelectChange, kidsSelect} = this.props
    let kidsInput = []
    if(kidsSelect != 0) {
      for(let i = 1; i <= kidsSelect; i++) {
        let id = `kids${i}`
        kidsInput = kidsInput.concat(id)
      }
    }

    return (
      <div>
        <p>
          I'm <Input id="myAge" handleChange={this.handleChange} /> years old 
          {(coverSelect != 2 && coverSelect != 3) ? '' : 
            <SpouseAge coverSelect={coverSelect} handleChange={this.handleChange} />}
          {(coverSelect != 3 && coverSelect != 4) ? '' : 
            <KidsAge 
              coverSelect={coverSelect}
              kidsSelectChange={kidsSelectChange}
              kidsSelect={kidsSelect}
              kidsInput={kidsInput}
              replaceText={this.replaceText}
              handleChange={this.handleChange}
              arrayChange={this.kidsArrChange} />}
        </p>
        <Errors errors={this.state.errors} />
      </div>
    )
  }
}

export default AgeInput
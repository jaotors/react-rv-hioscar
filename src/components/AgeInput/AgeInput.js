import React from 'react'
import Input from '../Input/Input'
import SpouseAge from '../SpouseAge/SpouseAge'
import KidsAge from '../KidsAge/KidsAge'

class AgeInput extends React.Component {
  constructor() {
    super(),
    this.replaceText = this.replaceText.bind(this)
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
    let kidsInput = []
    if(this.props.kidsSelect != 0) {
      for(let i = 1; i <= this.props.kidsSelect; i++) {
        let id = `kids${i}`
        kidsInput = kidsInput.concat(id)
      }
    }

    return (
      <div>
        <p>
          I'm <Input id="myAge" handleChange={this.props.handleChange} /> years old 
          {(this.props.coverSelect != 2 && this.props.coverSelect != 3) ? '' : 
            <SpouseAge coverSelect={this.props.coverSelect} handleChange={this.props.handleChange} />}
          {(this.props.coverSelect != 3 && this.props.coverSelect != 4) ? '' : 
            <KidsAge 
              coverSelect={this.props.coverSelect}
              kidsSelectChange={this.props.kidsSelectChange}
              kidsSelect={this.props.kidsSelect}
              kidsInput={kidsInput}
              replaceText={this.replaceText} />}
        </p>
      </div>
    )
  }
}

export default AgeInput
import React from 'react';
import Errors from '../../components/Errors/Errors'
import ZipCode from '../../components/ZipCode/ZipCode'
import SelectCover from '../../components/SelectCover/SelectCover'
import AgeInput from '../../components/AgeInput/AgeInput'
import Income from '../../components/Income/Income'
import Button from '../../components/Button/Button'

import './App.css';

class App extends React.Component {
  constructor() {
    super(),
    this.state = {
      zipCode: {
        value: '',
        error: true
      },
      ageInputError: true,
      coverInput: 0,
      kidsInput: 0,
      selectIncomePass: false,
      incomePass: false,
      errors: true
    }

    this.kidsSelectChange = this.kidsSelectChange.bind(this)
    this.coverSelectChange = this.coverSelectChange.bind(this)
    this.zipCodeChange = this.zipCodeChange.bind(this)
    this.changeAgeError = this.changeAgeError.bind(this)
    this.incomePassChange = this.incomePassChange.bind(this)
    this.selectIncomePassChange = this.selectIncomePassChange.bind(this)
  }

  kidsSelectChange(value) {
    this.setState({
      kidsInput: value
    })
  }

  coverSelectChange(value) {
    this.setState({
      coverInput: value
    })
  }

  zipCodeChange(value, hasError) {
    this.setState({
      zipCode: {
        value: value,
        error: hasError
      }
    })
  }

  changeAgeError(value) {
    this.setState({
      ageInputError: value
    })
  }

  selectIncomePassChange(value) {
    this.setState({
      selectIncomePass: value
    })
  }

  incomePassChange(value) {
    this.setState({
      incomePass: value
    })
  }

  render() {
    return (
      <div>
        <ZipCode zipCode={this.state.zipCode} zipCodeChange={this.zipCodeChange} />
        {(!this.state.zipCode.error) &&
          <SelectCover coverSelectChange={this.coverSelectChange} />}
        {
          (this.state.coverInput > 0) &&
            <AgeInput
              coverSelect={this.state.coverInput}
              kidsSelect={this.state.kidsInput}
              kidsSelectChange={this.kidsSelectChange}
              changeAgeError={this.changeAgeError}
            />
        }
        {(!this.state.ageInputError) &&
          <Income incomePassChange={this.incomePassChange} selectIncomePassChange={this.selectIncomePassChange} />}

        {(this.state.selectIncomePass && this.state.incomePass && 
          <Button text="Next" />)}
      </div>
    )
  }
}

export default App

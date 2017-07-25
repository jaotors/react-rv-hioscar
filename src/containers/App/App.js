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
      ages: {
        myAge: '',
      },
      ageInputError: true,
      coverInput: 0,
      kidsInput: 0,
      selectIncomePass: false,
      incomePass: false,
      income: '',
      globalError: true
    }

    this.kidsSelectChange = this.kidsSelectChange.bind(this)
    this.coverSelectChange = this.coverSelectChange.bind(this)
    this.zipCodeChange = this.zipCodeChange.bind(this)
    this.changeAgeError = this.changeAgeError.bind(this)
    this.incomePassChange = this.incomePassChange.bind(this)
    this.selectIncomePassChange = this.selectIncomePassChange.bind(this)
    this.agesChange = this.agesChange.bind(this)
    this.incomeChange = this.incomeChange.bind(this)
    this.setGlobalError = this.setGlobalError.bind(this)
  }

  kidsSelectChange(e) {
    const value = parseInt(e.target.value)
    this.setState({
      kidsInput: value
    })
  }

  coverSelectChange(e) {
    const value = parseInt(e.target.value)
    this.setState({
      coverInput: value
    })
  }

  zipCodeChange(e, hasError) {
    this.setState({
      zipCode: {
        value: e.target.value,
        error: hasError
      }
    })
  }

  agesChange(value) {
    this.setState({
      ages: value
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

  incomeChange(value) {
    this.setState({
      income: value
    })
  }

  setGlobalError(value) {
    this.setState({
      globalError: value
    })
  }

  render() {
    return (
      <div>
        <ZipCode setGlobalError={this.setGlobalError} zipCode={this.state.zipCode} zipCodeChange={this.zipCodeChange} />
        {(!this.state.zipCode.error) &&
          <SelectCover coverSelectChange={this.coverSelectChange} />}
        {
          (this.state.coverInput > 0) &&
            <AgeInput
              coverSelect={this.state.coverInput}
              kidsSelect={this.state.kidsInput}
              kidsSelectChange={this.kidsSelectChange}
              changeAgeError={this.changeAgeError}
              ages={this.state.ages}
              agesChange={this.agesChange}
              setGlobalError={this.setGlobalError}
            />
        }
        {(!this.state.ageInputError) &&
          <Income 
          incomeChange={this.incomeChange}
          incomePassChange={this.incomePassChange}
          selectIncomePassChange={this.selectIncomePassChange}
          income={this.state.income}
          setGlobalError={this.setGlobalError} />}

        {(this.state.selectIncomePass && this.state.incomePass && this.state.globalError &&
          <Button text="Next" />)}
      </div>
    )
  }
}

export default App

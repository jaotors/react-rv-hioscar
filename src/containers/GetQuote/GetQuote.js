import React from 'react';
import Errors from '../../components/Errors/Errors'
import ZipCode from '../../components/ZipCode/ZipCode'
import SelectCover from '../../components/SelectCover/SelectCover'
import AgeInput from '../../components/AgeInput/AgeInput'
import Income from '../../components/Income/Income'
import Button from '../../components/Button/Button'
import CheckList from '../../components/CheckList/CheckList'
import Waiting from '../../components/Waiting/Waiting'
import Done from '../../components/Done/Done'

import './GetQuote.css';

class GetQuote extends React.Component {
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
      globalError: true,
      checkComponent: false,
      checkPlan: false,
      waitingComponent: false,
      doneComponent: false
    }

    this.zipCodeChange = this.zipCodeChange.bind(this)
    this.setValueComponent = this.setValueComponent.bind(this)
  }

  zipCodeChange(e, hasError) {
    this.setState({
      zipCode: {
        value: e.target.value,
        error: hasError
      }
    })
  }

  setValueComponent(key, value) {
    this.setState({
      [key]: value
    })
  }

  render() {
    return (
      <div>
        {(!this.state.checkComponent) &&
          <ZipCode setValueComponent={this.setValueComponent} zipCode={this.state.zipCode} zipCodeChange={this.zipCodeChange} />}
        {(!this.state.zipCode.error) && (!this.state.checkComponent) &&
          <SelectCover setValueComponent={this.setValueComponent} />}
        {
          (this.state.coverInput > 0) && (!this.state.checkComponent) &&
            <AgeInput
              coverSelect={this.state.coverInput}
              kidsSelect={this.state.kidsInput}
              ages={this.state.ages}
              setValueComponent={this.setValueComponent}
            />
        }
        {
          (!this.state.ageInputError) && (!this.state.checkComponent) &&
            <Income
              income={this.state.income}
              selectIncomePass={this.state.selectIncomePass}
              incomePass={this.state.incomePass}
              globalError={this.state.globalError}
              checkComponent={this.state.checkComponent}
              setValueComponent={this.setValueComponent}
            />
        }
        {this.state.checkComponent && (!this.state.waitingComponent) &&
          <CheckList checkChange={this.checkChange} setValueComponent={this.setValueComponent} checkPlan={this.state.checkPlan} /> }
        {(this.state.waitingComponent) && (!this.state.doneComponent) &&
          <Waiting setValueComponent={this.setValueComponent} />}
        {(this.state.doneComponent) &&
          <Done />}
      </div>
    )
  }
}

export default GetQuote

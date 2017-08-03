import React from 'react';
import { connect } from 'react-redux';
import Errors from '../../components/Errors/Errors'
import ZipCode from '../../components/ZipCode/ZipCode'
import SelectCover from '../../components/SelectCover/SelectCover'
import AgeInput from '../../components/AgeInput/AgeInput'
import Income from '../../components/Income/Income'
import CheckList from '../../components/CheckList/CheckList'
import Waiting from '../../components/Waiting/Waiting'
import Done from '../../components/Done/Done'
import background from '../../utils/images/background.jpg'
import './GetQuote.css';

class GetQuote extends React.Component {
  constructor() {
    super(),
    this.state = {
      ages: {
        myAge: '',
      },
      coverInput: 0,
      kidsInput: 0,
      income: '',
      ageInputError: true,
      selectIncomePass: false,
      incomePass: false,
      globalError: true,
      checkComponent: false,
      checkPlan: false,
      waitingComponent: false,
      doneComponent: false
    }

    this.setValueComponent = this.setValueComponent.bind(this)
  }

  setValueComponent(key, value) {
    this.setState({
      [key]: value
    })
  }

  render() {
    const {zipcode} = this.props
    return (
      <div>
        <img className="mainBg" src={background} alt=""/>
        {(!this.state.checkComponent) &&
          <ZipCode setValueComponent={this.setValueComponent} />}
        {(!zipcode.hasError) && (!this.state.checkComponent) &&
          <SelectCover setValueComponent={this.setValueComponent} kidsSelect={this.state.kidsInput} />}
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

export default connect(
  state => ({ zipcode: state.zipcode })
)(GetQuote)
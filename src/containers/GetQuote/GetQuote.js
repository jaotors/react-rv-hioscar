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
      income: '',
      selectIncomePass: false,
      incomePass: false,
      checkPlan: false,
    }

    this.setValueComponent = this.setValueComponent.bind(this)
  }

  setValueComponent(key, value) {
    this.setState({
      [key]: value
    })
  }

  render() {
    const {
      zipcode,
      coverInput,
      component,
      ageInput
    } = this.props
    return (
      <div>
        <img className="mainBg" src={background} alt=""/>
        {(!component.checkComponent) &&
          <ZipCode />}
        {(!zipcode.hasError) && (!component.checkComponent) &&
          <SelectCover />}
        {(coverInput > 0) && (!component.checkComponent) &&
          <AgeInput /> }
        {(!ageInput.hasError) && (!component.checkComponent) &&
          <Income
              income={this.state.income}
              selectIncomePass={this.state.selectIncomePass}
              incomePass={this.state.incomePass}
              globalError={this.state.globalError}
              checkComponent={component.checkComponent}
              setValueComponent={this.setValueComponent}
            />}
        {component.checkComponent && (!component.waitingComponent) &&
          <CheckList checkChange={this.checkChange} setValueComponent={this.setValueComponent} checkPlan={this.state.checkPlan} /> }
        {(component.waitingComponent) && (!component.doneComponent) &&
          <Waiting setValueComponent={this.setValueComponent} />}
        {(component.doneComponent) &&
          <Done />}
      </div>
    )
  }
}

export default connect(
  state => ({ 
    zipcode: state.zipcode,
    component: state.component,
    coverInput: state.selectCover.coverInput,
    ageInput: state.ageInput
  })
)(GetQuote)
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
        {(ageInput.hasError) && (!component.checkComponent) &&
          <Income /> }
        {component.checkComponent && (!component.waitingComponent) &&
          <CheckList /> }
        {(component.waitingComponent) && (!component.doneComponent) &&
          <Waiting />}
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
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Input from '../Input/Input'
import Errors from '../Errors/Errors'
import { zipCodeChange, hasErrorChange, asyncVisibleChange } from './action'
import { addGlobalErr, removeGlobalErr } from '../../redux/modules/globalError'
import './ZipCode.css'

class ZipCode extends React.Component {
  constructor() {
    super(),
    this.state = {
      zipcodes: ["1226","1233","1209","1214","1217","1221","1222","1219","1220","1202","1201","1228","1212","1211","1206","1204","1229","1232","1224","1200","1207","1235","1231","1218","1213","1230","1210","1216","1215","1227","1203","1234","1223","1205","1225","1208"],
      errors: [],
      errCodes: [
        `There is no zipcode like that in makati`,
        `zipcode must be only 4 digits`
      ],
      visible: false
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const {
      onZipCodeChange,
      onHasErrorChange,
      onAddGlobalError,
      onRemoveGlobalError,
    } = this.props

    let errors = this.state.errors
    const zipMatch = this.state.zipcodes.some(zip => zip == e.target.value)

    if(zipMatch) {
      errors = errors.filter(err => err !== this.state.errCodes[0])
      onZipCodeChange(e.target.value)
      onRemoveGlobalError(this.state.errCodes[0])
    } else {
      const error = this.state.errors.some(err => err === this.state.errCodes[0])
      if(!error) {
        errors = errors.concat(this.state.errCodes[0])
        onAddGlobalError(this.state.errCodes[0])
      }
    }

    if(e.target.value.length === 4) {
      errors = errors.filter(err => err !== this.state.errCodes[1])
      onRemoveGlobalError(this.state.errCodes[1])
    } else {
      const error = this.state.errors.some(err => err === this.state.errCodes[1])
      if(!error) {
        errors = errors.concat(this.state.errCodes[1])
        onAddGlobalError(this.state.errCodes[1])
      }
    }

    if(errors.length < 1) onHasErrorChange()

    this.setState({
      errors: errors
    })
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        visible: true
      })
    })
  }

  render() {
    return (
      <div className={(!this.state.visible) ? 'zipcodeContainer' : 'zipcodeContainer active'}>
        <p className="small">Let’s get you a quote — it only takes a few seconds.</p>
        <p>My zipcode is <Input id="zipcode" handleChange={this.handleChange} /></p>
        <Errors errors={this.state.errors} />
      </div>
    )
  }
}

ZipCode.propTypes = {
  zipcode: PropTypes.object,
  onZipCodeChange: PropTypes.func,
  onHasErrorChange: PropTypes.func,
  onAddGlobalError: PropTypes.func,
  onRemoveGlobalError: PropTypes.func,
  onAsyncVisibleChange: PropTypes.func
}

export default connect(
  state => ({ zipcode: state.zipcode }),
  dispatch => ({
    onZipCodeChange: (zipcode) => dispatch(zipCodeChange(zipcode)),
    onHasErrorChange: () => dispatch(hasErrorChange()),
    onAddGlobalError: (error) => dispatch(addGlobalErr(error)),
    onRemoveGlobalError: (error) => dispatch(removeGlobalErr(error)),
  })
)(ZipCode)
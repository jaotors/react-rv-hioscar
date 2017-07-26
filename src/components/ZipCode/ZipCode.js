import React from 'react'
import PropTypes from 'prop-types'
import Input from '../Input/Input'
import Errors from '../Errors/Errors'
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
    const {zipCode, zipCodeChange} = this.props
    let errors = this.state.errors
    let hasError = zipCode.error
    const zipMatch = this.state.zipcodes.some(zip => zip == e.target.value)

    if(zipMatch) {
      errors = errors.filter(err => err !== this.state.errCodes[0])
    } else {
      const error = this.state.errors.some(err => err === this.state.errCodes[0])
      if(!error) {
        errors = errors.concat(this.state.errCodes[0])
      }
    }

    if(e.target.value.length === 4) {
      errors = errors.filter(err => err !== this.state.errCodes[1])
    } else {
      const error = this.state.errors.some(err => err === this.state.errCodes[1])
      if(!error) {
        errors = errors.concat(this.state.errCodes[1])
      }
    }

    if(errors.length < 1) hasError = false
    const setError = errors.length < 1 ? true : false
    this.props.setValueComponent("globalError", setError)

    zipCodeChange(e, hasError)
    this.setState({
      errors: errors
    })
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        visible: true
      })
    }, 500)
  }

  render() {
    return (
      <div className={(!this.state.visible) ? 'zipcodeContainer' : 'zipcodeContainer active'}>
        <p>My zipcode is <Input id="zipcode" handleChange={this.handleChange} /></p>
        <Errors errors={this.state.errors} />
      </div>
    )
  }
}

ZipCode.propTypes = {
  zipCode: PropTypes.object,
  zipCodeChange: PropTypes.func,
  setValueComponent: PropTypes.func
}

export default ZipCode
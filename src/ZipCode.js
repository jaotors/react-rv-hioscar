import React from 'react'
import Errors from './Errors'

class ZipCode extends React.Component {
  constructor() {
    super(),
    this.state = {
      zipcodes: ["1226","1233","1209","1214","1217","1221","1222","1219","1220","1202","1201","1228","1212","1211","1206","1204","1229","1232","1224","1200","1207","1235","1231","1218","1213","1230","1210","1216","1215","1227","1203","1234","1223","1205","1225","1208"],
      errors: [],
      errCodes: [
        `There is no zipcode like that in makati`,
        `zipcode must be only 4 digits`
      ]
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    if(this.state.zipcodes.some(zip => zip !== e.target.value)) {
      const error = this.state.errors.some(err => err === this.state.errCodes[0])
      if(!error) {
        this.setState({
          errors: this.state.errors.concat(this.state.errCodes[0])
        })
      } else {
        this.setState({
          errors: this.state.errors.filter(err => {
            return err != this.state.errCodes[1]
          })
        })
      }
    }

    if(e.target.value < 4) {
      const error = this.state.errors.some(err => err === this.state.errCodes[1])
      if(!error) {
        this.setState({
          errors: this.state.errors.concat(this.state.errCodes[1])
        })
      } else {
        this.setState({
          errors: this.state.errors.filter(err => {
            return err != this.state.errCodes[1]
          })
        })
      }
    }

    this.props.zipCodeChange(e.target.value)
  }

  render() {
    return (
      <div>
        <p>My zipcode is <input type="number" min="0" max="9999" onChange={this.handleChange} /></p>
        <Errors errors={this.state.errors} />
      </div>
    )
  }
}

export default ZipCode
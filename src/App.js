import React from 'react';
import Errors from './Errors'
import ZipCode from './ZipCode'
import SelectCover from './SelectCover'
import AgeInput from './AgeInput'
import Income from './Income'

import './App.css';

class App extends React.Component {
  constructor() {
    super(),
    this.state = {
      zipCode: '',
      coverInput: 0,
      kidsInput: 0
    }

    this.kidsSelectChange = this.kidsSelectChange.bind(this)
    this.coverSelectChange = this.coverSelectChange.bind(this)
    this.zipCodeChange = this.zipCodeChange.bind(this)
  }

  kidsSelectChange(e) {
    this.setState({
      kidsInput: e.target.value
    })
  }

  coverSelectChange(e) {
    this.setState({
      coverInput: e.target.value
    })
  }

  zipCodeChange(value) {
    this.setState({
      zipCode: value
    })
  }

  render() {
    return (
      <div>
        <ZipCode zipCodeChange={this.zipCodeChange} />
        <SelectCover coverSelectChange={this.coverSelectChange} />
        {
          (this.state.coverInput > 0) &&
            <AgeInput
              coverSelect={this.state.coverInput}
              kidsSelect={this.state.kidsInput}
              kidsSelectChange={this.kidsSelectChange}
            />
        }
        <Income />
      </div>
    )
  }
}

export default App

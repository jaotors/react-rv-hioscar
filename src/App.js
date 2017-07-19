import React from 'react';
import './App.css';

class ZipCode extends React.Component {

  render() {
    return(
      <div>
        <p>My zipcode is <input type="number" min="0" max="9999" /></p>
      </div>
    )
  }
}

class SelectCover extends React.Component {
  constructor() {
    super(),
    this.state = {
      id: `cover`,
      name: `selectCover`,
      options: [
        {value: 0, text: ''},
        {value: 1, text: 'me'},
        {value: 2, text: 'me and my spouse'},
        {value: 3, text: 'me, my spouse and my kids'},
        {value: 4, text: 'me and my kids'}
      ]
    }
  }

  render() {
    return(
      <div>
        <p>
          I'd like to cover 
          <select name={this.state.name} id={this.state.id} defaultValue='0'>
          {
            this.state.options.map(opt => {
              return <option key={opt.value} value={opt.value} disabled={opt.value === 0 ? true : false}>{opt.text}</option>
            })
          }
          </select>
        </p>
      </div>
    )
  }
}

class AgeInput extends React.Component {
  render() {
    return (
      <div>
        test
      </div>
    )
  }
}

class Income extends React.Component {
  render() {
    let count = []
    for(let i = 0; i < 9; i++) {
      let val = i
      if (val === 8) val += '+'
      count = count.concat(val)
    }
    return(
      <div>
        <p>I make P 
          <input type="text" /> yearly with 
          <select defaultValue="0">
            {
              count.map(c => {
                return <option key={c} value={c} disabled={c === 0 ? true : false}>{c === 0 ? '' : c }</option>
              })
            }
          </select>
          people in my tax household.
        </p>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return(
      <div>
        <ZipCode />
        <SelectCover />
        <AgeInput />
        <Income />
      </div>
    )
  }
}

export default App;

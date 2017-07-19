import React from 'react';
import './App.css';

class Errors extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>test</li>
        </ul>
      </div>
    )
  }
}

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
  }

  render() {
    return (
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
    return (
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

const Input = (props) => {
  return (
    <input id={props.id} type="text" onChange={props.handleChange} />
  )
}

const KidSelect = (props) => {
  let count = []
  for(let i = 0; i < 10; i++) {
    count = count.concat(i)
  }

  return (
    <select defaultValue="0" onChange={props.selectChange}>
      {
        count.map(c => {
          return <option key={c} value={c} disabled={c !== 0 ? false : true }>{c !== 0 ? c : '' }</option>
        })
      }
    </select>
  )
}

class AgeInput extends React.Component {

  replaceText(index, length) {
    const text = ['.', 'and', ',']
    if(index === length-1) {
      return text[0]
    } else if(index === length-2) {
      return text[1]
    } else {
      return text[2]
    }
  }

  render() {
    let kidsInput = []
    if(this.props.kidsSelect != 0) {
      for(let i = 1; i <= this.props.kidsSelect; i++) {
        let id = `kids${i}`
        return kidsInput.concat(<Input id={id} />)
      }
    }

    return (
      <div>
        <p>
          I'm <Input id="myAge" handleChange={this.props.handleChange} /> years old 
          my spouse is <Input id="spouseAge" handleChange={this.props.handleChange} /> 
          and my <KidSelect selectChange={this.props.selectChange} /> kid is 
          {
            (this.props.kidsSelect < 1 ) ? '' : (
              kidsInput.map((kids, index) => {
                let text = this.replaceText.bind(this, [index, kids.length])
                return <span key={index}>{kids}</span> + {text}
              })
            )
          }
        </p>
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

    return (
      <div>
        <p>I make P 
          <input type="text" /> yearly with 
          <select defaultValue="0">
            {
              count.map(c => {
                return <option key={c} value={c} disabled={c !== 0 ? false : true }>{c !== 0 ? c : '' }</option>
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
  constructor() {
    super(),
    this.state = {
      kidsInput: 0
    }

    this.selectChange = this.selectChange.bind(this)
  }

  selectChange(e) {
    this.setState({
      kidsInput: e.target.value
    })
  }

  render() {
    return (
      <div>
        <ZipCode />
        <SelectCover />
        <AgeInput kidsSelect={this.state.kidsInput} selectChange={this.selectChange} />
        <Income />
      </div>
    )
  }
}

export default App;

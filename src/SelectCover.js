import React from 'react'

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
          <select name={this.state.name} id={this.state.id} defaultValue='0' onChange={this.props.coverSelectChange}>
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

export default SelectCover
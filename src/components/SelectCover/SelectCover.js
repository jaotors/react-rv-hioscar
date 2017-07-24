import React from 'react'
import PropTypes from 'prop-types'

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
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const value = parseInt(e.target.value)
    this.props.coverSelectChange(value)
  }


  render() {
    return (
      <div>
        <p>
          I'd like to cover 
          <select name={this.state.name} id={this.state.id} defaultValue='0' onChange={this.handleChange}>
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

SelectCover.propTypes = {
  coverSelectChange: PropTypes.func
}

export default SelectCover
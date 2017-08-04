import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectCoverChange } from './action'
import './SelectCover.css'

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
      ],
      visible: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.onSelectCoverChange(parseInt(e.target.value))
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
      <div className={(!this.state.visible) ? 'selectCover' : 'selectCover active'}>
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
  onSelectCoverChange: PropTypes.func
}

export default connect(
  state => ({ coverInput: state.selectCover.coverInput }),
  dispatch => ({
    onSelectCoverChange: (value) => dispatch(selectCoverChange(value))
  })
)(SelectCover)
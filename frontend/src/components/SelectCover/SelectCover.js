import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { selectCoverChange, asyncVisibleChange } from './action'
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
  selectCover: PropTypes.object,
  onSelectCoverChange: PropTypes.func,
  onAsyncVisibleChange: PropTypes.func
}

export default connect(
  state => ({
    selectCover: state.selectCover
  }),
  dispatch => ({
    onSelectCoverChange: (value) => dispatch(selectCoverChange(value)),
    onAsyncVisibleChange: (value) => dispatch(asyncVisibleChange(value))
  })
)(SelectCover)
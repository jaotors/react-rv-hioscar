import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { changeDone } from '../../redux/modules/component'
import './Waiting.css'

class Waiting extends React.Component {
  constructor() {
    super(),
    this.state = {
      visible: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        visible: true
      })
    }, 500)
    setTimeout(() => {
      this.props.onChangeDone(true)
    }, 4000)
  }

  render() {
    return(
      <div className={(!this.state.visible) ? 'waitingContainer' : 'waitingContainer active'}>
        <p>Thanks</p>
        <h2>We’re putting together your personalized quote.</h2>
        <p className="loader"></p>
      </div>
    )
  }
}

Waiting.propTypes = {
  setValueComponent: PropTypes.func
}

export default connect(
  state => ({ }),
  dispatch => ({
    onChangeDone: (value) => dispatch(changeDone(value))
  })
)(Waiting)
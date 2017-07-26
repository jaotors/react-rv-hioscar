import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

class Button extends React.Component {
  constructor() {
    super(),
    this.state = {
      visible: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        visible: true
      })
    }, 500)
  }

  handleClick() {
    this.props.setValueComponent(this.props.keyVal, true)
  }

  render() {
    return(
      <div className={(!this.state.visible) ? 'btnContainer' : 'btnContainer active'}>
        <button onClick={this.handleClick} >{this.props.text}</button>
      </div>
    )
  }
}

Button.propTypes = {
  text: PropTypes.string,
  setValueComponent: PropTypes.func
}

export default Button
import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

class Button extends React.Component {
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
  }

  render() {
    return(
      <div className={(!this.state.visible) ? 'btnContainer' : 'btnContainer active'}>
        <button onClick={this.props.handleClick} >{this.props.text}</button>
      </div>
    )
  }
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
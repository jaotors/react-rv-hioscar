import React from 'react'
import { connect } from 'react-redux'
import './Done.css'

class Done extends React.Component {
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
      <div className={(!this.state.visible) ? 'doneContainer' : 'doneContainer active'}>
        {
          this.props.message.map((msg, index) => {
            return (
              <p key={index}>{msg}</p>
            )
          })
        }
      </div>
    )
  }
}

export default connect(
  state => ({
    message: state.component.message
  })
)(Done)
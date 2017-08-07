import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CheckInput from '../CheckInput/CheckInput'
import Button from '../Button/Button'
import { checkChange } from './action'
import { changeWaiting } from '../../redux/modules/component'
import './CheckList.css'

class CheckList extends React.Component {
  constructor() {
    super(),
    this.state = {
      checkList: [
        {
          id: "plan1",
          checkLabel: `I expect to see a specialist more than twice in 2017.`,
          checkExample: `e.g. cardiologists, endocrinologists, dermatologists`
        },

        {
          id: "plan2",
          checkLabel: `I am managing a chronic illness.`,
          checkExample: `e.g. diabetes, heart disease, depression, arthritis`
        },

        {
          id: "plan3",
          checkLabel: `I have a planned procedure for 2017.`,
          checkExample: `e.g. if you need surgery or are having a baby`
        },

        {
          id: "plan4",
          checkLabel: `I take two or more prescriptions every month`,
          checkExample: `e.g. medicine you take regularly or as needed`
        },
      ],
      checkedPlan: [false, false, false, false],
      visible: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        visible: true
      })
    }, 500)
  }

  handleChange(e) {
    const {id, checked} = e.target
    let checkedPlan = this.state.checkedPlan
    let checkId = id.substr(id.length-1)
    checkedPlan[checkId-1] = checked ? true : false

    this.setState({
      checkedPlan
    })

    const checkVal = this.state.checkedPlan.some(check => check === true)
    this.props.onCheckChange(checkVal)
  }

  render() {
    const {
      checkPlan,
      onChangeWaiting
    } = this.props

    return(
      <div className={(!this.state.visible) ? 'checklistContainer' : 'checklistContainer active'}>
        <h2>Let’s find the right plan for you!</h2>
        <p>Select any that apply. Don’t worry, these won’t affect your premium.</p>

        <ul>
          {
            this.state.checkList.map(check => {
              return (
                <li key={check.id}>
                  <CheckInput
                    id={check.id}
                    name="checkPlan"
                    checkLabel={check.checkLabel}
                    checkExample={check.checkExample}
                    handleChange={this.handleChange}
                  />
                </li>
              )
            })
          }
        </ul>
        <Button onClick={onChangeWaiting} text={checkPlan ? 'Get Quote' : 'Skip'} />
      </div>
    )
  }
}

CheckList.propTypes = {
  checkPlan: PropTypes.bool,
  onChangeWaiting: PropTypes.func,
  onCheckChange: PropTypes.func,
}

export default connect(
  state => ({ checkPlan: state.checkplan.checkPlan }),
  dispatch => ({
    onCheckChange: (value) => dispatch(checkChange(value)),
    onChangeWaiting: (value) => dispatch(changeWaiting(value))
  })
)(CheckList)

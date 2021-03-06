import React from 'react'
import { connect } from 'react-redux'
import { FadeInUp } from 'animate-css-styled-components'
import PropTypes from 'prop-types'
import CheckInput from '../CheckInput/CheckInput'
import Button from '../Button/Button'
import { checkChange, asyncDoneChange, setPlan } from './action'
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
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e) {
    const {id, checked} = e.target
    const { onCheckChange, onSetPlanChange } = this.props
    let checkedPlan = this.state.checkedPlan
    let checkId = id.substr(id.length-1)
    checkedPlan[checkId-1] = checked ? true : false

    this.setState({
      checkedPlan
    })

    const checkVal = this.state.checkedPlan.some(check => check === true)
    onCheckChange(checkVal)
    onSetPlanChange(id, checked)
  }

  handleClick() {
    const {
      onChangeWaiting,
      onAsyncDoneChange
    } = this.props

    onChangeWaiting(true)
    onAsyncDoneChange(this.props.selectCover, 3)
  }

  render() {
    const { checkPlan } = this.props

    return(
      <FadeInUp duration="0.5s" delay="0.5s" >
        <div className="checklistContainer">
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
          <Button handleClick={this.handleClick} text={checkPlan ? 'Get Quote' : 'Skip'} />
        </div>
      </FadeInUp>
    )
  }
}

CheckList.propTypes = {
  checkPlan: PropTypes.bool,
  onChangeWaiting: PropTypes.func,
  onCheckChange: PropTypes.func,
  onAsyncDoneChange: PropTypes.func,
}

export default connect(
  state => ({
    checkPlan: state.checkplan.checkPlan,
    selectCover: state.selectCover.coverInput
  }),
  dispatch => ({
    onCheckChange: (value) => dispatch(checkChange(value)),
    onSetPlanChange: (id, value) => dispatch(setPlan(id, value)),
    onChangeWaiting: (value) => dispatch(changeWaiting(value)),
    onAsyncDoneChange: (value, seconds) => dispatch(asyncDoneChange(value, seconds))
  })
)(CheckList)

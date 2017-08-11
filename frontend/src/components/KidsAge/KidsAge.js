import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Input from '../Input/Input'
import KidSelect from '../KidSelect/KidSelect'

class KidsAge extends React.Component {

  render() {
    const {
      coverInput,
      kidsInput,
      kidsInputArr,
      handleChange,
      replaceText,
      kidsAgeChange
    } = this.props

    return (
      <span>
        {(coverInput != 3 && coverInput != 4) ? '' : ' and my '}
        <KidSelect kidsAgeChange={kidsAgeChange} />
        {(kidsInput < 2 ? 'kid is' : 'kids are')}
        {
          (kidsInput < 1 ) ? '' : (
            kidsInputArr.map((kids, index) => {
              return <span key={index}><Input id={kids} handleChange={handleChange} />{replaceText(index, kidsInputArr.length)}</span>
            })
          )
        }
      </span>
    )
  }
}

KidsAge.propTypes = {
  coverInput: PropTypes.number,
  kidsInput: PropTypes.number,
  kidsInputArr: PropTypes.array,
  handleChange: PropTypes.func,
  replaceText: PropTypes.func,
  kidsAgeChange: PropTypes.func,
}

export default connect(
  state => ({
    coverInput: state.selectCover.coverInput,
    kidsInput: state.ageInput.kidsInput
  })
)(KidsAge)
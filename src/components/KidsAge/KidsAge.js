import React from 'react'
import PropTypes from 'prop-types'
import Input from '../Input/Input'
import KidSelect from '../KidSelect/KidSelect'

class KidsAge extends React.Component {

  render() {
    const {
      coverSelect,
      kidsSelectChange,
      kidsSelect,
      kidsInput,
      handleChange,
      replaceText,
      arrayChange
    } = this.props

    return (
      <span>
        {(coverSelect != 3 && coverSelect != 4) ? '' : ' and my '}
        <KidSelect kidsSelectChange={kidsSelectChange} arrayChange={arrayChange} />
        {(kidsSelect < 2 ? 'kid is' : 'kids are')}
        {
          (kidsSelect < 1 ) ? '' : (
            kidsInput.map((kids, index) => {
              return <span key={index}><Input id={kids} type="number" handleChange={handleChange} />{replaceText(index, kidsInput.length)}</span>
            })
          )
        }
      </span>
    )
  }
}

KidsAge.propTypes = {
  coverSelect: PropTypes.number,
  kidsSelect: PropTypes.number,
  kidsSelectChange: PropTypes.func,
  kidsInput: PropTypes.array,
  replaceText: PropTypes.func,
  handleChange: PropTypes.func,
  arrayChange: PropTypes.func,
}

export default KidsAge
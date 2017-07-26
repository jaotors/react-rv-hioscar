import React from 'react'
import PropTypes from 'prop-types'
import Input from '../Input/Input'
import KidSelect from '../KidSelect/KidSelect'

class KidsAge extends React.Component {

  render() {
    const {
      coverSelect,
      setValueComponent,
      kidsSelect,
      kidsInput,
      handleChange,
      replaceText,
      kidsAgeChange
    } = this.props

    return (
      <span>
        {(coverSelect != 3 && coverSelect != 4) ? '' : ' and my '}
        <KidSelect setValueComponent={setValueComponent} kidsAgeChange={kidsAgeChange} />
        {(kidsSelect < 2 ? 'kid is' : 'kids are')}
        {
          (kidsSelect < 1 ) ? '' : (
            kidsInput.map((kids, index) => {
              return <span key={index}><Input id={kids} handleChange={handleChange} />{replaceText(index, kidsInput.length)}</span>
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
  kidsInput: PropTypes.array,
  setValueComponent: PropTypes.func,
  replaceText: PropTypes.func,
  handleChange: PropTypes.func,
  kidsAgeChange: PropTypes.func,
}

export default KidsAge
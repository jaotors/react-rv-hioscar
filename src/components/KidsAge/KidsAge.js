import React from 'react'
import Input from '../Input/Input'
import KidSelect from '../KidSelect/KidSelect'

const KidsAge = (props) => {
  return (
    <span>
      {(props.coverSelect != 3 && props.coverSelect != 4) ? '' : ' and my '}
      <KidSelect kidsSelectChange={props.kidsSelectChange} />
      {(props.kidsSelect < 2 ? 'kid is' : 'kids are')}
      {
        (props.kidsSelect < 1 ) ? '' : (
          props.kidsInput.map((kids, index) => {
            return <span key={index}><Input id={kids} />{props.replaceText(index, props.kidsInput.length)}</span>
          })
        )
      }
    </span>
  )
}

export default KidsAge
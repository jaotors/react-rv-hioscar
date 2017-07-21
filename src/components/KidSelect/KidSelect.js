import React from 'react'

const KidSelect = (props) => {
  let count = []
  for(let i = 0; i < 10; i++) {
    count = count.concat(i)
  }

  return (
    <select defaultValue="0" onChange={props.kidsSelectChange}>
      {
        count.map(c => {
          return <option key={c} value={c} disabled={c !== 0 ? false : true }>{c !== 0 ? c : '' }</option>
        })
      }
    </select>
  )
}

export default KidSelect
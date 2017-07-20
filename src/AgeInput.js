import React from 'react'

const Input = (props) => {
  return (
    <input id={props.id} type="text" onChange={props.handleChange} />
  )
}

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

class AgeInput extends React.Component {
  replaceText(index, length) {
    const text = ['.', 'and', ',']
    if(index === length-1) {
      return text[0]
    } else if(index === length-2) {
      return text[1]
    } else {
      return text[2]
    }
  }

  render() {
    let kidsInput = []
    if(this.props.kidsSelect != 0) {
      for(let i = 1; i <= this.props.kidsSelect; i++) {
        let id = `kids${i}`
        kidsInput = kidsInput.concat(id)
      }
    }

    return (
      <div>
        <p>
          I'm <Input id="myAge" handleChange={this.props.handleChange} /> years old
          {(this.props.coverSelect != 2 && this.props.coverSelect != 3) ? '' : (this.props.coverSelect == 3  ? ', my spouse is' : ' and my spouse is')}
          {(this.props.coverSelect != 2 && this.props.coverSelect != 3) ? '' : <Input id="spouseAge" handleChange={this.props.handleChange} />}
          {(this.props.coverSelect != 3 && this.props.coverSelect != 4) ? '' : ' and my '}
          {(this.props.coverSelect != 3 && this.props.coverSelect != 4) ? '' : <KidSelect kidsSelectChange={this.props.kidsSelectChange} />}
          {(this.props.coverSelect != 3 && this.props.coverSelect != 4) ? '' : (this.props.kidsSelect < 2 ? 'kid is' : 'kids are')}
          {(this.props.coverSelect != 3 && this.props.coverSelect != 4) ? '' :
            (this.props.kidsSelect < 1 ) ? '' : (
              kidsInput.map((kids, index) => {
                return <span key={index}><Input id={kids} />{this.replaceText.apply(this, [index, kidsInput.length])}</span>
              })
            )
          }
        </p>
      </div>
    )
  }
}

export default AgeInput
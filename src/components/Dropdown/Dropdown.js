import React, { Component } from 'react' 
import DropdownItem from '../DropdownItem/DropdownItem';
import './dropdown.css'

const SVG = (props) => {
  return (
  <svg  
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg" 
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={{width: '12px', height: '6.49998px', overflow: 'visible', transform: `rotate(${props.rotate}deg)`}}
    >
    <path d="M 6 6.5 C 5.872 6.5 5.744 6.451 5.646 6.354 L 0.146 0.854 C -0.049 0.658 -0.05 0.341 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 6 5.293 L 11.146 0.146 C 11.342 -0.049 11.659 -0.05 11.854 0.146 C 12.049 0.342 12.049 0.658 11.854 0.854 L 6.354 6.354 C 6.256 6.451 6.128 6.5 6 6.5" fill="rgba(37,55,70,1)" name="arrow"/>
    </svg>
  )
}
   
export default class Dropdown extends Component {
state = {
  open: false,
  placeholder: this.props.placeholder
}

toggleDropdown = () => {
  this.setState({ open: !this.state.open })
}

setValue = (value) => {
  this.toggleDropdown();
  this.setState({ placeholder: value })
}

render() {

  let dropDownItems = this.props.text.map(item => {
    return <DropdownItem key={item} text={item} setValue={this.setValue} />    
  })

  let rotate = this.state.open ? 180 : 0;
   return (
     <div id="dropdown-wrapper"> 
      <div id="dropdown-input" onClick={() => this.toggleDropdown()}>
        <p>{this.state.placeholder}</p>
        <SVG rotate={rotate}/>
      </div>
      <div id="dropdown-item-wrapper">
      {this.state.open ? dropDownItems : '' }
      </div>
     </div>
    )
   }
  }
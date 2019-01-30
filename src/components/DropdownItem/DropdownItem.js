import React from 'react'
import './dropdownitem.css'


const DropdownItem = props => {
return (
  <div className="dropdown-item" onClick={() => props.setValue(props.text)}> 
   <p>{props.text}</p>
  </div>
 )
}
export default DropdownItem


import React from 'react'
import Face from "../images/face.png"
const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Simple Chat</span>
      <div className="user">
        <img src={Face} alt="" />
        <span>Marek</span>
        <button>Log Out</button>
      </div>
    </div>
  )
}

export default Navbar
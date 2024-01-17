import React from 'react'

function Header() {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src="https://plus.unsplash.com/premium_photo-1682216872195-0bfacc36b02c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D" width={100} height={100} alt="logo" />
        </div>
        <div className="nav-links">
          <ul>
            <li>home</li>
            <li>product</li>
            <li>contact</li>
            <li>cart</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header

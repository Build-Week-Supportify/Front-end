import React from 'react'
import { NavLink } from 'react-router-dom'

function NavSide() {
  return (
    <div className="otherNav">
          <NavLink to='/dashboard/issue_hub' className="collection-item">
          </NavLink>
          <NavLink to='/dashboard/issue_add' className="collection-item">Add Issue</NavLink>
          <NavLink to='/dashboard/reporting' className="collection-item">Reporting</NavLink>
          <NavLink to='/dashboard/payment' className="collection-item">Payment</NavLink>
      </div>
  )
}

export default NavSide
import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

function Header()
{
  return (
    <>
      <div className='header'>
          <nav>
              <Link to ="/home">
        <span id="homestyling">Home</span>
        </Link>

        <Link to="/student" style={{ textDecoration: 'none' }}>
        <span id="studentstyling">Students</span>
      
        </Link>
        <Link to ="/contact">
        <span id="contactstyling">Contact</span>
        </Link>
        <Link to ="*"> </Link>
        </nav>
      </div>
    </>
  )
}

export default Header;
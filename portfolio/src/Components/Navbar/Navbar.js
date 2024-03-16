import React from 'react'
import './Navbar.css'
import logo from '../../Assets/namelog.png'
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  return (
    <div>
      <nav className='navbar-Container'>
        <p>  𝒔𝒉𝒊𝒗𝒂𝒎 </p>

        <div className='navbar-Menu'>
          <Link activeClass='active' to='intro ' spy={true} smooth={true} offset={-50} duration={500} className='navbar-link'>Home</Link>
          <Link activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={400} className='navbar-link' >About</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-20} duration={400} className='navbar-link'>skills</Link>
          <Link activeClass='active' to='project' spy={true} smooth={true} offset={-40} duration={400} className='navbar-link'>Project</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-0} duration={500} className='navbar-link'>Contact</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar


import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/logo.svg'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="links">
          <Link className='link' to="/?cat=PYTHON">
            <h6>PYTHON</h6>
          </Link>
          <Link className='link' to="/?cat=js">
            <h6>JS</h6>
          </Link> 
          <Link className='link' to="/?cat=WEB3">
            <h6>WEB3</h6>
          </Link>
          <Link className='link' to="/?cat=nextjs">
            <h6>NEXT.JS</h6>
          </Link>  
          <Link className='link' to="/?cat=DJANGO">
            <h6>DJANGO</h6>
          </Link>  
          <Link className='link' to="/?cat=FRONTEND">
            <h6>FRONTEND</h6>
          </Link>  
          <Link className='link' to="/?cat=BACKEND">
            <h6>BACKEND</h6>
          </Link>
          <span> SB </span>
          <span> 로그아웃 </span>
          <span className='write'>
            <Link className='link' to='/write'>글쓰기</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
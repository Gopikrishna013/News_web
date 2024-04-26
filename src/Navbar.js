import React from 'react'
import './Nav.css'

import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg  navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><i className='sub fs-3'>NEWS</i>.WEB</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span> 
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav   fs-5" id='News-nav'>
        <li className="nav-item" >
          <a className="nav-link active"  aria-current="page" href="#"><Link to="/Home" id='Nav-id'> Home</Link></a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link to="/Entertainment" id='Nav-id'> Entertainment</Link></a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link to="/Business" id='Nav-id'> Business</Link></a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link to="/Sports" id='Nav-id'> Sports</Link></a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link to="/Health" id='Nav-id'> Health</Link></a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link to="/Science" id='Nav-id'> Science</Link></a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link to="/Technology" id='Nav-id'> Technology</Link></a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link to="/General" id='Nav-id'> General</Link></a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar

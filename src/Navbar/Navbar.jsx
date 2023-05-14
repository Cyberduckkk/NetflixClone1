import React from 'react'
import Logo from '.././Assets/Netflix-Logo.png';
import "bootstrap/dist/css/bootstrap.min.css"
import './Navbar.css'
import {BsGlobe2} from 'react-icons/bs'
import "bootstrap/dist/js/bootstrap.min.js";
import { Link, NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';




const Navbar = () => {
  return (
    <div className="navbar-main  pt-4">
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src={Logo} width={130} className='img-fluid'/>
                </div>
                <div className="col-6 navbar-link-right">
                    <div className="navbar-link">
                    <NavLink to='/english'>
                                English
                     </NavLink>
                     <NavLink to='/hindi'>
                     हिंदी
                     </NavLink>
                    </div>
                    <a href="#" className='navbar-btn'>Sign In</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar

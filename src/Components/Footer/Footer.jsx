import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Footer/Footer.css';
const Footer = () => {
  return (
    <div className='footer-main'>
      <div className="container">
        <span>Question?Call <a href="#">000-800-919-1694</a></span>
        <div className="row text-white">
            <div className="col-lg-3 col-md-6">
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Investor Relations</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Speed Test</a></li>
            </div>
            <div className="col-lg-3 col-md-6">
                <li><a href="#">Help Centre</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Cookie Preferences</a></li>
                <li><a href="#">Legal Notices</a></li>
            </div>
            <div className="col-lg-3 col-md-6">
                <li><a href="#">Account</a></li>
                <li><a href="#">Ways to Watch</a></li>
                <li><a href="#">Corporate Information</a></li>
                <li><a href="#">Only on Netflix</a></li>
            </div>
            <div className="col-lg-3 col-md-6">
                <li><a href="#">Media Centre</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Contact Us</a></li>
            </div>
        </div>
        <div className="bottom-link">
        <NavLink to='/english'>
                                English
        </NavLink>             
        <NavLink to='/hindi'>
        हिंदी
        </NavLink>
        </div>
        <p>Netflix India</p>
      </div>
    </div>
  )
}

export default Footer

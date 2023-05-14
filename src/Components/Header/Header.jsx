import React from 'react'
import {MdArrowForwardIos} from 'react-icons/md';
import '../Header/Header.css'
const Header = () => {
  return (
    <div className='header-main'>
      <div className="container">
        <div className="row">
            <div className="col-12">
                <h1>Unlimited movies, TV shows <br /> and more</h1>
                <br />
                <p>Warch anywhere. Cancel anytime</p>
                <p>ready to watch? Enter your  email to create or restart your membership.</p>
                <br />
                <div className="email-input-box">
                    <input type="text" placeholder='Email address'/>
                    <a href="#" className='btn btn-header'>Get Started<MdArrowForwardIos/></a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header

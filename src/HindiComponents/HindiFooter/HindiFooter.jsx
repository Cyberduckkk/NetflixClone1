import React from 'react'
import '../HindiFooter/HindiFooter.css'
import { NavLink } from 'react-router-dom'
const HindiFooter = () => {
  return (
    <div>
          <div className='footer-main'>
      <div className="container">
        <span>प्रश्न?बुलाओ <a href="#">000-800-919-1694</a></span>
        <div className="row text-white">
            <div className="col-lg-3 col-md-6">
                <li><a href="#">सामान्य प्रश्न</a></li>
                <li><a href="#">निवेशक संबंध</a></li>
                <li><a href="#">गोपनीयता</a></li>
                <li><a href="#">स्पीड टेस्ट</a></li>
            </div>
            <div className="col-lg-3 col-md-6">
                <li><a href="#">सहायता केंद्र</a></li>
                <li><a href="#">नौकरियां</a></li>
                <li><a href="#">कुकी वरीयताएँ</a></li>
                <li><a href="#">कानूनी नोटिस</a></li>
            </div>
            <div className="col-lg-3 col-md-6">
                <li><a href="#">खाता</a></li>
                <li><a href="#">देखने के तरीके</a></li>
                <li><a href="#">कॉर्पोरेट जानकारी</a></li>
                <li><a href="#">केवल नेटफ्लिक्स पर</a></li>
            </div>
            <div className="col-lg-3 col-md-6">
                <li><a href="#">मीडिया केंद्र</a></li>
                <li><a href="#">उपयोग की शर्तें</a></li>
                <li><a href="#">संपर्क करें</a></li>
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
        <p>Netflix भारत</p>
      </div>
    </div>
    </div>
  )
}

export default HindiFooter

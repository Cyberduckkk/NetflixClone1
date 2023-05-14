import React from 'react'
import '../NetflixFeature/Features.css'
import TV from '../../Assets/tv.svg'
import Popcorn from '../../Assets/popcorn.svg'
import Download from '../../Assets/download.svg'
import Ball from '../../Assets/crystalball.svg'
const Features = () => {
  return (
    <div className='features-main'>
        <div className="fade">asd</div>
      <div className="container-fluid">
        <div className="row">
            <div className="col-12 col-lg-4 col-md-6 col-xl-3">
                <div className="features-content">
                <img src={TV} width={100}/>
                    <h1 className='title'>Enjoy on your <br /> TV</h1>
                    <p className='subtitle'>Enjoy on your TV
                         Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and mor
                     </p>
                </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6 col-xl-3">
                                <div className="features-content">
                <img src={Popcorn} width={100}/>
                    <h1 className='title'>Watch everywhere</h1>
                    <p className='subtitle'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                     </p>
                </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6 col-xl-3">
                                <div className="features-content">
                <img src={Ball} width={100}/>
                    <h1 className='title'>Create profiles for kids</h1>
                    <p className='subtitle'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.
                     </p>
                </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6 col-xl-3 ">
                                <div className="features-content">
                <img src={Download} width={100}/>
                    <h1 className='title'>Download your shows to watch offline</h1>
                    <p className='subtitle'>Save your favourites easily and always have something to watch.
                     </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Features

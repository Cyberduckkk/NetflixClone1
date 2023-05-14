import React from 'react'
import '../HindiFeatures/HindiFeatures.css'
import TV from '../../Assets/tv.svg'
import Popcorn from '../../Assets/popcorn.svg'
import Download from '../../Assets/download.svg'
import Ball from '../../Assets/crystalball.svg'
const HindiFeatures = () => {
  return (
    <div>
       <div className='features-main'>
        <div className="fade">asd</div>
      <div className="container-fluid">
        <div className="row">
            <div className="col-12 col-lg-4 col-md-6 col-xl-3">
                <div className="features-content">
                <img src={TV} width={100}/>
                    <h1 className='title'>अपने टीवी पर<br /> आनंद लें</h1>
                    <p className='subtitle'>स्मार्ट टीवी, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray प्लेयर के साथ ही दूसरे डिवाइस पर भी देखें.
                     </p>
                </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6 col-xl-3">
                                <div className="features-content">
                <img src={Popcorn} width={100}/>
                    <h1 className='title'>हर जगह देखें</h1>
                    <p className='subtitle'>बिना ज़्यादा पेमेंट किए, अपने फ़ोन, टैबलेट, लैपटॉप और टीवी पर अनलिमिटेड फ़िल्में और टीवी शो स्ट्रीम करें.
                     </p>
                </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6 col-xl-3">
                                <div className="features-content">
                <img src={Ball} width={100}/>
                    <h1 className='title'>बच्चों के लिए <br />प्रोफ़ाइल बनाएं </h1>
                    <p className='subtitle'>बच्चों को जाने दें अपने पसंदीदा किरदारों के साथ उस रोमांचक सफ़र पर जो सिर्फ़ उनके लिए ही है - आपकी मेंबरशिप के साथ फ़्री.


                     </p>
                </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6 col-xl-3 ">
                                <div className="features-content">
                <img src={Download} width={100}/>
                    <h1 className='title'>ऑफ़लाइन देखने के लिए अपने शो डाउनलोड करें</h1>
                    <p className='subtitle'>अपने पसंदीदा शो और फ़िल्में सेव करें, ताकि आप कभी भी इन्हें देख सकें.
                     </p>
                </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default HindiFeatures

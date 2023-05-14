import React from 'react'
import {MdArrowForwardIos} from 'react-icons/md';
import '../../HindiComponents/HindiHeader/HindiHeader.css'
const HindiHeader = () => {
  return (
    <div>
          <div className='header-main'>
      <div className="container">
        <div className="row">
            <div className="col-12">
                <h1>अनलिमिटेड फ़िल्में, टीवी शो के<br />साथ भी बहुत कुछ</h1>
                <br />
                <p>जहां चाहें देखें. जब चाहें कैंसल करें.</p>
                <p>देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें.</p>
                <br />
                <div className="email-input-box">
                    <input type="text" placeholder='मेल पता'/>
                    <a href="#" className='btn btn-header'>शुरू हो जाओ<MdArrowForwardIos/></a>
                </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default HindiHeader

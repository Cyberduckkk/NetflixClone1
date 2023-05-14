import React from 'react'
import '../HindiQuestions/HindiQuestion.css';
import {MdArrowForwardIos} from 'react-icons/md'
const HindiQuestion = () => {
  return (
    <div className='questions-main'>
        <div className="container">
            <h1 className='text-white py-3 title'>अक्सर पूछे जाने वाले प्रश्नों</h1>
        <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
     Netflix क्या है?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <p>
        नेटफ्लिक्स एक स्ट्रीमिंग सेवा है जो हजारों इंटरनेट से जुड़े उपकरणों पर पुरस्कार विजेता टीवी शो, फिल्में, एनीमे, वृत्तचित्र और बहुत कुछ प्रदान करती है।
        </p>
        <p>
        आप जब चाहें, जितना चाहें, बिना किसी विज्ञापन के देख सकते हैं - सब कुछ एक कम मासिक कीमत पर। खोजने के लिए हमेशा कुछ नया होता है, और हर हफ्ते नए टीवी शो और फिल्में जोड़ी जाती हैं!
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      नेटफ्लिक्स की लागत कितनी है?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">
            <p>
            अपने स्मार्टफोन, टैबलेट, स्मार्ट टीवी, लैपटॉप या स्ट्रीमिंग डिवाइस पर नेटफ्लिक्स देखें, सब कुछ एक निश्चित मासिक शुल्क पर। प्लान ₹149 से लेकर ₹649 प्रति माह तक के हैं। कोई अतिरिक्त लागत नहीं, कोई अनुबंध नहीं।
            </p>
        </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      मैं कहाँ देख सकता हूँ?
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <p>
        कहीं भी, कभी भी देखें। अपने पर्सनल कंप्यूटर या स्मार्ट टीवी, स्मार्टफोन, टैबलेट, स्ट्रीमिंग मीडिया प्लेयर और गेम कंसोल सहित नेटफ्लिक्स ऐप की पेशकश करने वाले किसी भी इंटरनेट से जुड़े डिवाइस से netflix.com पर तुरंत वेब देखने के लिए अपने नेटफ्लिक्स खाते से साइन इन करें।
        </p>
        <p>
        आप अपने पसंदीदा शो को iOS, Android, या Windows 10 ऐप से भी डाउनलोड कर सकते हैं। चलते-फिरते और इंटरनेट कनेक्शन के बिना देखने के लिए डाउनलोड का उपयोग करें। नेटफ्लिक्स को अपने साथ कहीं भी ले जाएं।
        </p>
      </div>
    </div>
  </div>


  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      How do i cancel?
      </button>
    </h2>
    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <p>
        नेटफ्लिक्स लचीला है। कोई कष्टप्रद अनुबंध नहीं हैं और कोई प्रतिबद्धता नहीं है। आप आसानी से दो क्लिक में अपना खाता ऑनलाइन रद्द कर सकते हैं। कोई रद्दीकरण शुल्क नहीं है - अपना खाता कभी भी शुरू या बंद करें।
        </p>
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingfive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefive" aria-expanded="false" aria-controls="flush-collapsefive">
      मैं नेटफ्लिक्स पर क्या देख सकता हूं?
      </button>
    </h2>
    <div id="flush-collapsefive" class="accordion-collapse collapse" aria-labelledby="flush-headingfive" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <p>
        नेटफ्लिक्स के पास फीचर फिल्मों, वृत्तचित्रों, टीवी शो, एनीमे, पुरस्कार विजेता नेटफ्लिक्स मूल और बहुत कुछ की एक विस्तृत लाइब्रेरी है। जब चाहो, जितना चाहो, देख लो।
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingsix">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsesix" aria-expanded="false" aria-controls="flush-collapsesix">
      क्या नेटफ्लिक्स बच्चों के लिए अच्छा है?
      </button>
    </h2>
    <div id="flush-collapsesix" class="accordion-collapse collapse" aria-labelledby="flush-headingsiz" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <p>
        नेटफ्लिक्स किड्स अनुभव माता-पिता को नियंत्रण देने के लिए आपकी सदस्यता में शामिल है, जबकि बच्चे अपने स्वयं के स्थान पर परिवार के अनुकूल टीवी शो और फिल्मों का आनंद लेते हैं।
        </p>
        <p>
        किड्स प्रोफाइल पिन-सुरक्षित माता-पिता के नियंत्रण के साथ आते हैं जो आपको बच्चों द्वारा देखी जा सकने वाली सामग्री की परिपक्वता रेटिंग को प्रतिबंधित करते हैं और उन विशिष्ट शीर्षकों को ब्लॉक करते हैं जिन्हें आप नहीं चाहते कि बच्चे देखें।
        </p>
      </div>
    </div>
  </div>
</div>
<div className="question-bottom-content text-white my-5">
<p>देखने के लिए तैयार हैं? अपनी सदस्यता बनाने या पुनः आरंभ करने के लिए अपना ईमेल दर्ज करें।</p>
<div className="email-input-box">
                    <input type="text" placeholder='मेल पता'/>
                    <a href="#" className='btn btn-header'>शुरू हो जाओ<MdArrowForwardIos/></a>
                </div>
</div>
        </div>
    </div>
  )
}

export default HindiQuestion

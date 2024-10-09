import React from 'react'
import { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/edusity_assets/next-icon.png'
import back_icon from '../../assets/edusity_assets/back-icon.png'
import user_1 from '../../assets/edusity_assets/user-1.png'
import user_2 from '../../assets/edusity_assets/user-2.png'
import user_3 from '../../assets/edusity_assets/user-3.png'
import user_4 from '../../assets/edusity_assets/user-4.png'
function Testimonials() {

  const slider=useRef()
let tx =0
const slidforword=()=>{
if(tx > -50){
tx =tx-25
}
slider.current.style.transform =`translateX(${tx}%)`;
}

const slidbackword=()=>{
  if(tx <0){
    tx =tx + 25
    }
    slider.current.style.transform =`translateX(${tx}%)`;
}
  return (
    <div className='testimonials' id='testimonials'>
      <img src={next_icon} className='next-btn' alt="" onClick={slidforword}/>
      <img src={back_icon} className='back-btn' alt="" onClick={slidbackword}/>
      <div className="slider">
<ul ref={slider}>
  <li>
    <div className="slide">
      <div className="user-info">
        <img src={user_1} alt="" />
     
      <div>
      <h3>William Jackson</h3>
      <span>Edusity, USA</span></div>
    </div>
<p>Choosing to pursue my degree at Adusity was one of the besr decision I've ever made. the Supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expections.</p> </div>
  </li>
  <li>
    <div className="slide">
      <div className="user-info">
        <img src={user_2} alt="" />
     
      <div>
      <h3>William Jackson</h3>
      <span>Edusity, USA</span></div>
    </div>
<p>Choosing to pursue my degree at Adusity was one of the besr decision I've ever made. the Supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expections.</p> </div>
  </li>
  <li>
    <div className="slide">
      <div className="user-info">
        <img src={user_3} alt="" />
     
      <div>
      <h3>William Jackson</h3>
      <span>Edusity, USA</span></div>
    </div>
<p>Choosing to pursue my degree at Adusity was one of the besr decision I've ever made. the Supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expections.</p> </div>
  </li>
  <li>
    <div className="slide">
      <div className="user-info">
        <img src={user_4} alt="" />
     
      <div>
      <h3>William Jackson</h3>
      <span>Edusity, USA</span></div>
    </div>
<p>Choosing to pursue my degree at Adusity was one of the besr decision I've ever made. the Supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expections.</p> </div>
  </li>
</ul>

      </div>
      
    </div>
  )
}

export default Testimonials

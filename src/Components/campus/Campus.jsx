import React from 'react'
import gallery_1 from '../../assets/edusity_assets/gallery-1.png'
import gallery_2 from '../../assets/edusity_assets/gallery-2.png'
import gallery_3 from '../../assets/edusity_assets/gallery-3.png'
import gallery_4 from '../../assets/edusity_assets/gallery-4.png'
import white from '../../assets/edusity_assets/white-arrow.png'
import './Campus.css'
function Campus() {
  return (
    <div className='campus' id='campus'>  
    <div className="gallery">
      <img src={gallery_1} alt="" />
      <img src={gallery_2} alt="" />
      <img src={gallery_3} alt="" />
      <img src={gallery_4} alt="" />
    </div>
      <button className='btn dark-btn'>See more here <img src={white} alt="" /></button>
    </div>
  )
}

export default Campus

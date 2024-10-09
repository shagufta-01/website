import React, { useRef }  from 'react'
import './Video.css'
import video from '../../assets/edusity_assets/college-video.mp4'
function Videopl({playstate,setPlayState}) {
const player = useRef(null)
const closePlayer=(e)=>{
  if(e.target===player.current){
    setPlayState(false)
  }

}
  return (
    <div className={`video-player ${playstate ? '':'hide'}`} ref={player} onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
      
    </div>
  )
}

export default Videopl

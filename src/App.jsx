import { useState } from 'react'
import './App.css'
import About from './Components/about/About'
import Campus from './Components/campus/Campus'
import Contact from './Components/contact/Contact'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar'
import Programms from './Components/Programms/Programms'
import Testimonials from './Components/testimonials/Testimonials'
import Title from './Components/Title/Title'
import Videopl from './Components/VideoPlayer/Videopl'


function App() {

  const [playstate, setPlayState] =useState(false)
  return (
  <>
  <Navbar />
  <Hero />
  <div className="container">
    <Title subTitle='OUR PROGRAM' title='What We Offer' />
    <Programms />
    <About setPlayState={setPlayState}/>
<Title subTitle='GALLERY' title='Campus Photos' />
<Campus />
<Title subTitle='TESTIMONIALS' title='What Student Says' />
<Testimonials />
<Title subTitle='CONTACT US' title='Get in Touch' />
<Contact />
<Footer />
    </div>
<Videopl playstate={playstate} setPlayState={setPlayState} />
  </>
  )
}

export default App

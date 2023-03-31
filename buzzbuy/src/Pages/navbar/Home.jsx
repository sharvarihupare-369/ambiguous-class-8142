

import React from 'react'
import Featured from '../../components/Home/Featured'
import Footer from '../../components/Home/Footer'
import Main from '../../components/Home/Main'
import Navbar from '../../components/Home/Navbar'
import SliderPro from '../../components/Home/SliderPro'
import Sliders from '../../components/Home/Sliders'

function Home() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <SliderPro/>
      <Sliders/>
      <Featured/>
      <Footer/>
    </div>
  )
}

export default Home
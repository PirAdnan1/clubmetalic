import React from 'react'

// components
import Hero from './Hero'
// import Navbar from '@/components/Navbar'
import Navbar2 from '@/components/Navbar2'
import Cols from './Cols'
import Winners from './Winners'
import Verify from './Verify'
import Footer from './Footer'

function HomeContents() {
  return (
    <div>
        {/* <Navbar /> */}
        <Navbar2 />
        <Hero />
        <Cols />
        <Winners />
        <Verify />
        <Footer />
    </div>
  )
}

export default HomeContents
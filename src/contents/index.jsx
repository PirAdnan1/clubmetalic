import React from 'react'

// components
import Hero from './Hero'
import Navbar from '@/components/Navbar'
import Cols from './Cols'
import Winners from './Winners'
import Verify from './Verify'
import Footer from './Footer'

function HomeContents() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Cols />
        <Winners />
        <Verify />
        <Footer />
    </div>
  )
}

export default HomeContents
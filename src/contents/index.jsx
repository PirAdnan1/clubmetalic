import React from 'react'

// components
import Hero from './Hero'
import Navbar from '@/components/Navbar'
import Cols from './Cols'

function HomeContents() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Cols />
    </div>
  )
}

export default HomeContents
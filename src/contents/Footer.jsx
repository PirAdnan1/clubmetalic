import React from 'react'
import Image from 'next/image'

// components
import Container from '@/components/Container'

// assest
import SmallTree from '@/assets/SmallTree'
import Car from "@/assets/car.png"

function Footer() {
  return (
    <Container>
    <div className='relative mt-[127px]'>
        <SmallTree className="absolute top-44 hidden lg:block left-[214px]" />
        <h1 className='lg:text-[56px] text-4xl font-bold text-primary hidden lg:block max-w-[798px] mx-auto leading-[35px] lg:leading-[63px]'>Win big and double your net worth in just three steps.</h1>
        <Image src={Car} className='absolute -top-28 lg:top-24 right-48' />
        <div className='flex flex-col lg:flex-row bg-[#001447] text-white justify-center items-center lg:items-start mt-[127px] lg:gap-[495px] gap-16 pt-[113px] pb-[65px]'>
            <span>© 2023  Zodbyte Development</span>
            <div className='flex items-center gap-8'>
                <span>Sponsor us</span>
                <span>Legal notice</span>
                <span>Privacy policy</span>
            </div>
        </div>
    </div>
    </Container>
  )
}

export default Footer
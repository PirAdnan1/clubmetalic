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
        <SmallTree className="absolute top-44 left-[214px]" />
        <h1 className='text-[56px] font-bold text-primary max-w-[798px] mx-auto leading-[63px]'>Win big and double your net worth in just three steps.</h1>
        <Image src={Car} className='absolute right-48' />
        <div className='flex bg-[#001447] text-white justify-center mt-[127px] gap-[495px] pt-[113px] pb-[65px]'>
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
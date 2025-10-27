import Footer from '@/components/Footer'
import Malumot1 from '@/components/Malumot/Malumot1'
import Navbar from '@/components/navbar'
import React from 'react'

export const metadata = {
  title: "Ob-havo | Haqida",
  description: "N1",
};


export default function Malumot() {
  return (
    <div>
        <div className='main'>
        <Navbar/>
        <Malumot1/>

        <Footer/>
        </div>
    </div>
  )
}

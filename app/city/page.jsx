import Shaharlar from '@/components/city/city1'
import Footer from '@/components/Footer'
import Navbar from '@/components/navbar'
import React from 'react'

export const metadata = {
  title: "Ob-havo | Shaharlar",
  description: "N1",
};
export default function City() {
  return (
    <div className='city'>
        <Navbar/>
        <Shaharlar/>
        <Footer/>
    </div>
  )
}

import Footer from '@/components/Footer'
import Navbar from '@/components/navbar'
import SearchBar from '@/components/Search'
import React from 'react'

export default function App() {
  return (
    <div>
      <header className='header min-h-screen bg-no-repeat bg-cover'>
        <Navbar /> 
        <SearchBar />
      <Footer/>
      </header>
    </div>
  )
}

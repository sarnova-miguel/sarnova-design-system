import React from 'react'
import HeaderBrandFilter from './HeaderBrandFilter'

const SarnovaHeader = () => {
  return (
    <header className='p-4 md:p-6'>
        <h1 className='text-center text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6'>Sarnova Design System</h1>
        <HeaderBrandFilter />
    </header>
  )
}

export default SarnovaHeader
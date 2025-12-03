import React from 'react'

const SectionDesc = ({children}: {children: React.ReactNode}) => {
  return (
    <p className='mb-4 text-base md:text-lg'>{children}</p>
  )
}

export default SectionDesc
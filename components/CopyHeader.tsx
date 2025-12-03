import React from 'react'

const CopyHeader = ({children}: {children: React.ReactNode }) => {
  return (
    <h4 className='font-semibold text-base md:text-lg mb-4'>{children}</h4>
  )
}

export default CopyHeader
import React from 'react'

const SectionHeader = ({children, anchor}: {children: React.ReactNode, anchor: string}) => {
  return (
    <h2 className='font-bold text-xl md:text-2xl mb-6 md:mb-10' id={anchor}>{children}</h2>
  )
}

export default SectionHeader
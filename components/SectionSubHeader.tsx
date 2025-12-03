import React from 'react'

const SectionSubHeader = ({children, anchor}: {children: React.ReactNode, anchor: string}) => {
  return (
    <h3 className='font-semibold text-lg md:text-xl underline mb-4' id={anchor}>{children}</h3>
  )
}

export default SectionSubHeader
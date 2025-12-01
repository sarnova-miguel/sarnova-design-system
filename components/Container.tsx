import React from 'react'

const Container = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='p-4 max-w-svw min-h-svh'>{children}</div>
  )
}

export default Container
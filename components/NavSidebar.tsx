import React from 'react'
import NavSidebarContent from './NavSidebarContent'

const NavSidebar = () => {
  return (
    <NavSidebarContent className='hidden md:block md:rounded-tl-none md:fixed md:top-[--header-height] md:left-0 md:h-[calc(100vh-var(--header-height))] md:overflow-y-auto' />
  )
}

export default NavSidebar
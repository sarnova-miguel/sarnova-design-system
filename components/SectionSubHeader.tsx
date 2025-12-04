import { cn } from '@/lib/utils'
import React from 'react'

const SectionSubHeader = ({children, anchor, className}: {children: React.ReactNode, anchor: string, className?: string}) => {
  return (
    <h3 className={cn('font-semibold text-lg md:text-xl underline mb-4', className)} id={anchor}>{children}</h3>
  )
}

export default SectionSubHeader
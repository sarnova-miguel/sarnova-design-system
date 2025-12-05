import { cn } from '@/lib/utils'
import React from 'react'

const SectionDesc = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <p className={cn('mb-4 text-base md:text-lg', className)}>{children}</p>
  )
}

export default SectionDesc
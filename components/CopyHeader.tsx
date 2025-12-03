import { cn } from '@/lib/utils'
import React from 'react'

const CopyHeader = ({children, className}: {children: React.ReactNode, className?: string }) => {
  return (
    <h4 className={cn('font-semibold text-base md:text-lg mb-4', className)}>{children}</h4>
  )
}

export default CopyHeader
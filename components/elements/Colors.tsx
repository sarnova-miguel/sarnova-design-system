import React from 'react'
import SectionSubHeader from '../SectionSubHeader'
import SectionDesc from '../SectionDesc'
import BTBadge from '../BTBadge'
import TABadge from '../TABadge'
import CPBadge from '../CPBadge'
import DTBadge from '../DTBadge'

const Colors = () => {
  return (
    <div className="mb-10">
        <SectionSubHeader anchor="colors">Colors</SectionSubHeader>
        <SectionDesc>Primary and secondary colors per brand</SectionDesc>
        {
            <div className='mb-6'>
                <BTBadge />
            </div>
        }
        {
            <div className='mb-6'>
                <TABadge />
            </div>
        }
        {
            <div className='mb-6'>
                <CPBadge />
            </div>
        }
        {
            <div className='mb-6'>
                <DTBadge />
            </div>
        }
    </div>
  )
}

export default Colors
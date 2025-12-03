import React from 'react'
import SectionHeader from '../SectionHeader'
import Colors from './Colors'
import Icons from './Icons'
import Typography from './Typography'
import Spacing from './Spacing'

const Elements = () => {
  return (
    <section className='mb-12 md:mb-16'>
        <SectionHeader anchor="elements">Elements</SectionHeader>
        <Colors />
        <Icons />
        <Spacing />
        <Typography />
    </section>
  )
}

export default Elements
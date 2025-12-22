import React from 'react'
import { HomeHero } from './(home)/HomeHero'
import Homeintro from './(home)/HomeIntro'
import HomeForm from './(home)/HomeForm'
import { AboutTestimonials } from './about/AboutTestimonials'

const page = () => {
  return (
    <>  
      <HomeHero />
      <Homeintro/>
      <HomeForm/>
      <AboutTestimonials/>
    </>
  )
}

export default page
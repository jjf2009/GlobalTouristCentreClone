import React from 'react'
import { HomeHero } from './(home)/HomeHero'
import Homeintro from './(home)/HomeIntro'
import HomeForm from './(home)/HomeForm'
import { AboutTestimonials } from './about/AboutTestimonials'
import type { Metadata } from "next";
import { getTranslations } from "@/lib/i18n/getTranslations";


export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = getTranslations(params.locale);

  return {
    title: t.hero.tagline,
  };
}
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
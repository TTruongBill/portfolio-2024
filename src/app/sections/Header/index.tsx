import "./header.css"
import { useTranslations } from 'next-intl'
import React from 'react'
import DesktopNav from '@sections/DesktopNav'
import MobileNav from "@sections/MobileNav"

export default function Header() {
    const t = useTranslations('NAV')
    const linkHome = t('HOME')
    const linkAbout = t('ABOUT')
    const linkPortfolio = t('PORTFOLIO')
  
    return (
        <>
            <MobileNav links={[linkHome, linkAbout, linkPortfolio]}/>
            <DesktopNav links={[linkHome, linkAbout, linkPortfolio]}/>
        </>
       
    ) 
}


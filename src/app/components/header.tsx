import "./header.css"
import { useTranslations } from 'next-intl'
import Link from './Link/Link'
import React from 'react'
import DesktopNav from '../sections/DesktopNav/DesktopNav'
import slugify from 'slugify'
import { useLocale } from "next-intl"
import MobileNav from "./MobileNav/MobileNav"

export default function Header() {
    const t = useTranslations('NAV')
    const locale = useLocale()
    const linkHome = `/${locale}/${slugify(t('HOME')).toLowerCase()}`
    const linkAbout = `/${locale}/${slugify(t('ABOUT')).toLowerCase()}`
    const linkPortfolio = `/${locale}/${slugify(t('PORTFOLIO')).toLowerCase()}`
  
    return (
        <>
            <MobileNav buttonLink='/' buttonText='Contact Me'>
                <div className="linkContainer">
                    <Link href={linkHome}>{t('HOME')}</Link>
                </div>
                <div className="linkContainer">
                    <Link href={linkAbout}>{t('ABOUT')}</Link>
                </div>
                <div className="linkContainer">
                    <Link href={linkPortfolio}>{t('PORTFOLIO')}</Link>
                </div>
            </MobileNav>
            <DesktopNav buttonLink='/' buttonText='Contact Me'>
            <Link href={linkHome}>{t('HOME')}</Link>
                <Link href={linkAbout}>{t('ABOUT')}</Link>
                <Link href={linkPortfolio}>{t('PORTFOLIO')}</Link>
            </DesktopNav>
        </>
       
    ) 
}


import "./header.css"
import { useTranslations } from 'next-intl'
import Link from './Link/Link'
import React from 'react'
import Nav from './Nav/Nav'
import slugify from 'slugify'
import { useLocale } from "next-intl"

export default function Header() {
    const t = useTranslations('NAV')
    const locale = useLocale()
    const linkHome = `/${locale}/${slugify(t('HOME')).toLowerCase()}`
    const linkAbout = `/${locale}/${slugify(t('ABOUT')).toLowerCase()}`
    const linkPortfolio = `/${locale}/${slugify(t('PORTFOLIO')).toLowerCase()}`
  
    return (
        <Nav buttonLink='/' buttonText='Contact Me'>
            <Link href={linkHome}>{t('HOME')}</Link>
            <Link href={linkAbout}>{t('ABOUT')}</Link>
            <Link href={linkPortfolio}>{t('PORTFOLIO')}</Link>
        </Nav>
    ) 
}


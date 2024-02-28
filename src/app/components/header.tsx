import "./header.css"
import { useTranslations } from 'next-intl'
import Link from './Link/Link'
import React from 'react'
import Nav from './Nav/Nav'
import slugify from 'slugify'


export default function Header() {
    const t = useTranslations('NAV')
  
    return (
        <Nav buttonLink='/' buttonText='Contact Me'>
            <Link href={"/" + slugify(t('HOME'))}>{t('HOME')}</Link>
            <Link href={"/" + slugify(t('ABOUT'))}>{t('ABOUT')}</Link>
            <Link href={"/" + slugify(t('PORTFOLIO'))}>{t('PORTFOLIO')}</Link>
        </Nav>
    ) 
}
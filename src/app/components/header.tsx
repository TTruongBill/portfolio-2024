import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'
import LocalSwitcher from './local-switcher'

export default function Header() {
    const t = useTranslations('NAVIGATION')
    return (
        <header>
            <h1>Header</h1>
            <nav className='flex flex-row'>
                <Link href="/">{t('title')}</Link>
                <LocalSwitcher />
            </nav>
        </header>
    ) 
}
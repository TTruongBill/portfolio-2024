

import React from 'react'
import LocalSwitcher from '../local-switcher'
import { MobileNavProps } from './types'
import Button from '../Button/Button'
import H1 from '../H1/H1'
import Link from '../Link/Link'
import "./mobileNav.css"

export default function MobileNav({ children, buttonLink, buttonText }: MobileNavProps) {

    return (
        <header className='w-full flex justify-center fixed z-10'>
            <div className='flex w-full md:hidden flex-row justify-between items-center my-6 mx-6'>
                <Link href="/"><H1>Tien</H1></Link>
                <input type="checkbox" id="menu"/>
                <label htmlFor="menu"> x </label>
                <div className='menu bg-slate-500'>
                    <section className="flex flex-row ml-4 my-6 justify-between items-center mr-8">
                        <Link href="/"><H1>Tien</H1></Link>
                        <label htmlFor="menu">x</label>
                    </section>
                    <nav className='flex flex-col items-start mb-10'>
                        {children}
                    </nav>
                    <div className='flex flex-row items-center ml-6 mb-6'>
                        <Button link={buttonLink} title={buttonText} className='nav-contact'/>
                        <LocalSwitcher />
                    </div>
                </div>
            </div>
        </header>
    ) 
}


import React from 'react'
import LocalSwitcher from '../local-switcher'
import { MobileNavProps } from './types'
import Button from '../Button/Button'
import H1 from '../H1/H1'
import Link from '../Link/Link'
import "./mobileNav.css"
import MenuBurger from '../Svg/MenuBurger'
import HideMenu from '../HideMenu/HideMenu'

export default function MobileNav({ children, buttonLink, buttonText }: MobileNavProps) {

    return (
        <HideMenu>
            <header className='w-full flex justify-center fixed z-10 bg-purple-1'>
                <div className='flex w-full md:hidden flex-row justify-between items-center my-4 mx-6'>
                    <Link href="/"><H1>Tien</H1></Link>
                    <input type="checkbox" id="menu"/>
                    <label htmlFor="menu"><MenuBurger className="menuIcon"/></label>
                    <div className='menu bg-purple-1'>
                        <section className="flex flex-row ml-6 my-4 justify-between items-center mr-8">
                            <Link href="/"><H1>Tien</H1></Link>
                            <label htmlFor="menu">x</label>
                        </section>
                        <nav className='flex flex-col items-start mb-10'>
                            {children}
                        </nav>
                        <div className='flex flex-row items-center ml-6 mb-6'>
                            <Button link={buttonLink} title={buttonText} className='ml-2 nav-contact'/>
                            <LocalSwitcher />
                        </div>
                    </div>
                </div>
            </header>
        </HideMenu>
    ) 
}
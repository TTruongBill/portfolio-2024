
import React from 'react'
import LocalSwitcher from '@components/LocalSwitcher'
import { MobileNavProps } from './types'
import ContactButton from "@newComponents/ContactButton";
import H1 from '@components/H1'
import Link from '@components/Link'
import "./mobileNav.css"
import MenuBurger from '@components/Svg/MenuBurger'
import HideMenu from '@components/HideMenu'

export default function MobileNav({ children }: MobileNavProps) {

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
                            <ContactButton className="ml-2"/>
                            <LocalSwitcher />
                        </div>
                    </div>
                </div>
            </header>
        </HideMenu>
    ) 
}
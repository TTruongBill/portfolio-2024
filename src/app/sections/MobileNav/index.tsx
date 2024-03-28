'use client'
import React, { useRef } from "react"
import LocalSwitcher from '@components/LocalSwitcher'
import { MobileNavProps } from './types'
import ContactButton from "@newComponents/ContactButton";
import { H3 } from '@components/Headings'
import Link from '@components/Link'
import "./mobileNav.css"
import MenuBurger from '@components/Svg/MenuBurger'
import slugify from 'slugify'

export default function MobileNav({ links }: MobileNavProps) {

    const menuRef = useRef<HTMLInputElement>(null)

    function closeMenu() {
        if(menuRef.current) {
            menuRef.current.checked = false;
        }
    }

    return (
            <header className='w-full flex justify-center fixed z-10 bg-purple-1'>
                <div className='flex w-full md:hidden flex-row justify-between items-center my-4 mx-6'>
                    <Link href="/"><H3>Tien</H3></Link>
                    <input ref={menuRef} type="checkbox" id="menu"/>
                    <label htmlFor="menu"><MenuBurger className="menuIcon"/></label>
                    <div className='menu bg-purple-1'>
                        <section className="flex flex-row ml-6 my-4 justify-between items-center mr-8">
                            <Link href="/"><H3>Tien</H3></Link>
                            <label htmlFor="menu">x</label>
                        </section>
                        <nav className='flex flex-col items-start mb-10'>
                            {links.map((link, i) => {
                                return (
                                    <div className="linkContainer" key={i} onClick={closeMenu}>
                                        <Link href={`#${slugify(link).toLowerCase()}`}>{link}</Link>
                                    </div>
                                )
                            })}
                        </nav>
                        <div className='flex flex-row items-center ml-6 mb-6'>
                            <ContactButton className="ml-2"/>
                            <LocalSwitcher />
                        </div>
                    </div>
                </div>
            </header>
    ) 
}
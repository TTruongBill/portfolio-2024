

import React from 'react'
import LocalSwitcher from '../local-switcher'
import { DesktopNavProps } from './types'
import Button from '../Button/Button'
import H1 from '../H1/H1'
import Link from '../Link/Link'
import "./desktopNav.css"
import HideMenu from '../HideMenu/HideMenu'

export default function DesktopNav({ children, buttonLink, buttonText }: DesktopNavProps) {

    return (
        <HideMenu>
            <header className='w-full flex justify-center'>
                <div className='hidden md:flex md:w-full lg:w-3/4 xl:w-1/2 flex-row justify-between items-center my-6 mx-6'>
                    <Link href="/"><H1>Tien</H1></Link>
                    <nav className='flex flex-row'>
                        {children}
                    </nav>
                    <div className='flex flex-row items-center'>
                        <Button link={buttonLink} title={buttonText} className='nav-contact'/>
                        <LocalSwitcher />
                    </div>
                </div>
            </header>
        </HideMenu>
    ) 
}
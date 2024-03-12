

import React from 'react'
import LocalSwitcher from '@components/LocalSwitcher'
import { DesktopNavProps } from './types'
import H1 from '@components/H1'
import Link from '@components/Link'
import "./desktopNav.css"
import HideMenu from '@components/HideMenu'
import ContactButton from "@newComponents/ContactButton";

export default function DesktopNav({ children }: DesktopNavProps) {

    return (
        <HideMenu>
            <header className='w-full flex justify-center bg-purple-1'>
                <div className='hidden md:flex md:w-full lg:w-3/4 xl:w-1/2 flex-row justify-between items-center my-4 mx-6'>
                    <Link href="/"><H1>Tien</H1></Link>
                    <nav className='flex flex-row'>
                        {children}
                    </nav>
                    <div className='flex flex-row items-center'>
                        <ContactButton />
                        <LocalSwitcher />
                    </div>
                </div>
            </header>
        </HideMenu>
    ) 
}
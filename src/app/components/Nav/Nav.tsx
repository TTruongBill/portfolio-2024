"use client"

import React from 'react'
import LocalSwitcher from '../local-switcher'
import { NavProps } from './types'
import Button from '../Button/Button'
import { useRef, useEffect } from 'react'
import H1 from '../H1/H1'
import Link from '../Link/Link'
import "./nav.css"

export default function Nav({ children, buttonLink, buttonText }: NavProps) {
    const ref = useRef(null);
    var prevScroll = 0;

    useEffect(() => {
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll);
    });

    function onScroll(){
        if (window.innerWidth > 960){
            let nav = ref.current as unknown as HTMLElement;
            var currentScroll = window.scrollY;
                if (currentScroll > 0 && prevScroll <= currentScroll){
                    window.setTimeout((()=>{nav.classList.remove("is-visible");
                                            nav.classList.add("is-hidden");}), 100);
                } else {
                    window.setTimeout((()=>{ nav.classList.remove("is-hidden");
                                            nav.classList.add("is-visible");}), 100);
                }
            prevScroll = currentScroll;
        }
    }

    return (
        <header id="desktop-nav" className='fixed w-full flex justify-center' ref={ref}>
            <div className='w-1/2 flex flex-row justify-between items-center my-6 mx-6'>
                <Link href="/"><H1>Tien</H1></Link>
                <nav className='flex flex-row'>
                    {children}
                </nav>
                <div className='flex flex-row items-center'>
                    <Button id="nav-contact" link={buttonLink} title={buttonText}/>
                    <LocalSwitcher />
                </div>
            </div>
        </header>

    ) 
}
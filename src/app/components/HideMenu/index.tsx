"use client"
import React, { useRef, useEffect } from 'react'
import { HideMenuProps } from './types'

export default function HideMenu({ children }: HideMenuProps) {
    const ref = useRef(null);
    var prevScroll = 0;

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    });

    function onScroll() {
        if (ref.current){
            let nav = ref.current as HTMLElement;
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
    return(
        <div ref={ref} className="hide-menu w-full fixed is-visible">
            {children}
        </div>
    )
}
import { TouchEvent } from 'react'

export interface SwipeInput {
    onSwipedLeft: () => void
    onSwipedRight: () => void
}

export interface SwipeOutput {
    onTouchStart: (e: TouchEvent) => void
    onTouchMove: (e: TouchEvent) => void
    onTouchEnd: (e: TouchEvent) => void
}
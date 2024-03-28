'use client'
import { TouchEvent, useState } from "react";
import { SwipeInput, SwipeOutput } from "./types";

export default function useSwipe({onSwipedLeft, onSwipedRight}: SwipeInput): SwipeOutput {
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const minSwipeDistance = 50;

    const onTouchStart = (e: TouchEvent) => {
        setTouchEnd(0);
        setTouchStart(e.targetTouches[0].clientX);
    }

    const onTouchMove = (e: TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe) {
            onSwipedLeft();
        }
        if (isRightSwipe) {
            onSwipedRight();
        }
    }

    return {
        onTouchStart,
        onTouchMove,
        onTouchEnd
    }
}
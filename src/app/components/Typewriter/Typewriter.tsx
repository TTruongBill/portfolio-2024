"use client";
import React, { useState, useEffect } from 'react';
import TypewriterProps from './types';

const Typewriter = ({ text, delay, infinite }: TypewriterProps) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      let timeout: NodeJS.Timeout;
  
      if (currentIndex < text.length) {
        timeout = setTimeout(() => {
          setCurrentText(prevText => prevText + text[currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        }, delay);
  
      } else {
        if (infinite) { // ADD THIS CHECK
        setTimeout(() => {  
            setCurrentIndex(0);
            setCurrentText('');
        }, 4000)
          }
      }
  
      return () => clearTimeout(timeout);
    }, [currentIndex, delay, infinite, text]);

  return <span>{currentText}</span>;
};

export default Typewriter;
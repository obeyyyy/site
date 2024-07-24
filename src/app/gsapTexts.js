// components/Gsaptext.js

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const Gsaptext = ({ children }) => {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-animate]');
    
    elements.forEach((element) => {
      new SplitType(element, {
        types: 'lines, words, chars',
        tagName: 'span',
      });

      gsap.from(element.querySelectorAll('.word'), {
        y: '100%',
        opacity: 0,
        duration: 0.35,
        ease: 'power1.out',
        stagger: 0.15,
       
      });
    });
  }, []);

  return <div>{children}</div>;
};

export default Gsaptext;

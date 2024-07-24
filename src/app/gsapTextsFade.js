// components/Gsaptext.js

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const GsaptextFade = ({ children }) => {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-animate1]');
    
    elements.forEach((element) => {
      new SplitType(element, {
        types: 'lines, words, chars',
        tagName: 'span',
      });

      gsap.from(element.querySelectorAll('.word'), {
        y: '110%',
        opacity: 0,
        rotationZ: '10',
        duration: 2.7,
        ease: 'back.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: element,
          start: 'top center',
        },
      });
    });
  }, []);

  return <div>{children}</div>;
};

export default GsaptextFade;

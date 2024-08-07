"use client"; // top to the file
import Image from "next/image";
import { Container } from "postcss";
import ".//globals.css";
import AnimatedBackground from "./AnimatedBackground";
import Section07 from "./arrow"; 
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
import './/fonts'; // Import the Font Awesome library configuration
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { JavaIcon, ReactIcon, PythonIcon, Html5Icon, Css3Icon, NodeJsIcon, MarkdownIcon, LinkedInIcon, CIcon } from ".//fonts";
import dynamic from "next/dynamic";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Gb, Ma, Es, Fr } from "react-flags-select";
import Gsaptext from './gsapTexts';
import GsapFade from './gsapTextsFade';


export default function Home() {
  const [refAbout, inViewAbout] = useInView({ threshold: 0.5 });
  const [refProjects, inViewProjects] = useInView({ threshold: 0.5 });
  const [refextra, inViewextra] = useInView({ threshold: 0.5 });
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    if (inViewAbout || inViewProjects || inViewextra) {
      setAnimationStarted(true);
    }
  }, [inViewAbout, inViewProjects, inViewextra]);

  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <AnimatedBackground />
      <header className="flex justify-between max-w-10xl mx-auto px-4 py-3 sm:px-6 text-white">
        <a className="flex space-x-10 hover:text-blue-300">
          Home
        </a>
        <div className="flex space-x-10">
          <a className="hover:text-blue-300" href="#about">
            About
          </a>
          <a className="hover:text-blue-300" href="#projects">
            Projects
          </a>
          <a className="hover:text-blue-300" href="#extra">
            Skills
          </a>
          <a href="https://www.linkedin.com/in/oubaye-el-ghammat-ghori-68a50a213"  rel="noopener noreferrer"  target="_blank" className=" hover:text-blue-700">
            <LinkedInIcon/>
          </a>
        </div>
      </header>

      <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">
        <section id="about" className="row" ref={refAbout}>
          <div className="mb-16 p-1 grid gap-x-4 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
       
            <motion.div
           
              initial={'hidden'}
              animate={inViewAbout ? 'visible' : 'hidden'}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
              transition={{ duration: 0.6 }}
              className="col-span-3 p-4 border-4 gradient-border rounded-lg"
            >
                 <Gsaptext>
              <h1 data-animate className="text-center text-4xl md:text-7xl p-5 text-white">About me</h1>
              <h1 data-animate className="text-xl md:text-2xl text-white">
                Hello, My name is Oubaye and I am a computer science graduate
              </h1>
              <br></br>
              <p data-animate className="text-white">
                As a passionate and driven Computer Science graduate based in Lancaster, United Kingdom, with a Spanish
                nationality and a flair for technology, I am on a mission to leverage the power of innovation to solve
                complex challenges and make a positive impact on the world while also learning and improving on the way.
              </p>  
              </Gsaptext>
            </motion.div>
           
            <motion.div
              initial={'hidden'}
              animate={inViewAbout ? 'visible' : 'hidden'}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
              transition={{ duration: 0.6 }}
              className="col-span-1 pt-6 rounded-2xl"
            >
              <img className="rounded-full w-full h-auto" src="/assets/portfoliopic.jpeg" alt="Example" />
            </motion.div>
          </div>   
          <div className="mt-14 h-5"><Section07/></div>
        </section>
        <AnimatedBackground />
    
        <section id="projects" className="row p-6 md:p-20" ref={refProjects}>
          <motion.h1
            initial={'hidden'}
            animate={inViewProjects ? 'visible' : 'hidden'}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.6 }}
            className="col-span-2 text-center text-4xl md:text-7xl p-5 text-white"
          >
           <h1 className="p-2"> Projects </h1>
            <div className="mb-16 md:mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left p-4 gradient-border border-4">
              <a
                href="https://github.com/obeyyyy/lunar-lander"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:font-semibold hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="mb-3 text-xl md:text-2xl text-white font-semibold hover:text-black">
                  Lunar Lander Game{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none hover:text-black ">
                    -&gt;
                  </span>
                  <img className="size-fit" src={"/assets/lunar_lander.png"}></img>
                </h2>
                <p className="text-sm opacity-80 text-white hover:text-black">
                  The famous lunar lander game written in C ncurses library
                </p>
              </a>
              <a
                href="https://github.com/obeyyyy/SCC300-TYP/tree/first"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="mb-3 text-xl md:text-2xl font-semibold text-white hover:text-black">
                  Blockchain consensus protocols{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                  <img className="size-fit" src={"/assets/bitcoin.jpg"}></img>
                </h2>
                <p className="text-sm opacity-80 text-white hover:text-black">
                  Using jabs (just another blockchain simulator), my research aimed to extend the Java simulator appropriately to decrease the amount of costly cross-shard Ethereum transactions and reach perfect load balance across all shards in the blockchain network.
                </p>
              </a>
              <a
                href="https://github.com/obeyyyy/bank-app-system"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="mb-3 text-xl md:text-2xl font-semibold text-white hover:text-black">
                  Simple Bank Java GUI{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                  <img className="size-fit" src={"/assets/image.png"}></img>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-80 text-white hover:text-black">
                  A simple banking application built with java GUI, where you can deposit, withdraw, and check your balance.
                </p>
              </a>
              <a
                href="https://github.com/obeyyyy/NetworkApplication"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="mb-3 text-xl md:text-2xl font-semibold text-white hover:text-black">
                  Traceroute and ParisTraceroute Implementation{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                  <img className="size-fit" src={"/assets/11.png"}></img>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-80 text-white hover:text-black">
                  Implemented the networking tools such as pinging, traceroute and ParisTraceroute using python.
                </p>
              </a>
            </div>
          </motion.h1>
        </section>
       
        <section ref={refextra} id="extra">
          <motion.div
            initial={'hidden'}
            animate={inViewextra ? 'visible' : 'hidden'}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="gradient-border border-4 rounded-lg p-5 text-white">
              <h1 className="text-center text-4xl md:text-7xl p-3">Tech Stack</h1>
              <div className="grid grid-cols-2 gap-2 pl-16 whitespace-pre ">
                <div className="w-24 h-24 flex flex-col justify-center items-center text-red-500">
                  <div className="spin-slow"><JavaIcon size="4x"/></div>
                  <div>3 years</div>
                </div>
                <div className="w-24 h-24 flex flex-col justify-center items-center text-blue-500">
                  <div className="spin-slow"><ReactIcon size="4x"/></div>
                  <div>1 year</div>
                </div>
                <div className="w-24 h-24 flex flex-col justify-center items-center text-orange-800">
                  <div className="spin-slow"><Html5Icon size="4x"/></div>
                  <div>3 years</div>
                </div>
                <div className="w-24 h-24 flex flex-col justify-center items-center text-blue-800">
                  <div className="spin-slow"><PythonIcon size="4x"/></div>
                  <div>2 years</div>
                </div>
                <div className="w-24 h-24 flex flex-col justify-center items-center text-cyan-500">
                  <div className="spin-slow"><Css3Icon size="4x"/></div>
                  <div>3 years</div> 
                </div>
                <div className="w-24 h-24 flex flex-col justify-center items-center text-green-500">
                  <div className="spin-slow"><NodeJsIcon size="4x"/></div>
                  <div>1 year</div> 
                </div>
                <div className="flex flex-col items-left font-bold rounded-full text-white p-1">
                  <img className="rounded-full border bg-white spin-slow" src="/assets/next-js.svg" alt="Example" width={60} height={60}/>
                  <div>2 years</div>  
                </div>
                <div className="w-24 h-24 flex flex-col justify-center items-center text-blue-300">
                  <div className="spin-slow"><CIcon size="4x"/></div>
                  <div>3 years</div> 
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-5">
            <h1 className="text-center text-4xl md:text-7xl p-5">Experience</h1>
            <div className="flex flex-col gap-4 ">
              <GsapFade>
              <div data-animate1>
                Full stack Developer at Jordi Hans design (based in Sweden) 2023 - ongoing: <br></br>
               <br></br>
                Involved in developing a variety of mobile apps and websites using technologies 
                such as React.js, WordPress, and Firebase database, focusing on creating
                user-friendly interfaces, ensuring responsive design, and implementing efficient
                backend functionalities.<br></br> <br></br> This experience includes collaborating with
                cross-functional teams, conducting thorough testing, and continuously improving performance 
                and security to deliver high-quality digital solutions.
              </div> 
              </GsapFade>
            </div>
          </div>


            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-5">
              <h1 className="text-center text-4xl md:text-7xl p-5">Languages</h1>
              <div className="flex gap-4 items-center flags-container">
                <div>
                  <Gb className="text-5xl"/> 
                </div> 
                <div>English</div>
                <div>
                  <Es className="text-5xl"/> 
                </div> 
                <div>Spanish</div>
                <div>
                  <Ma className="text-5xl"/> 
                </div> 
                <div>Arabic</div>
                <div>
                  <Fr className="text-5xl"/> 
                </div> 
                <div>French</div>
              </div>
            </div>

            <div className="p-5 w-64 h-64 flex flex-col justify-center items-center mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
              <h1 className="text-center text-4xl md:text-7xl p-5 text-black">CV</h1>
              <a
                href="/assets/Oubaye's CV6.pdf"
                download
                className="text-center text-2xl md:text-3xl text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:text-black py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
              >
                <MarkdownIcon size="2x"/>
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
"use client"; // top to the file
import Image from "next/image";
import { Container } from "postcss";
import ".//globals.css";
import AnimatedBackground from "./AnimatedBackground";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
import './/fonts'; // Import the Font Awesome library configuration
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { JavaIcon, ReactIcon, PythonIcon, Html5Icon, Css3Icon, NodeJsIcon, MarkdownIcon, LinkedInIcon } from ".//fonts";
import dynamic from "next/dynamic";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Gb, Ma, Es, Fr } from "react-flags-select";


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
          <a href="https://www.linkedin.com/in/oubaye-el-ghammat-ghori-68a50a213"  rel="noopener noreferrer"  target="_blank" className=" hover:text-blue-700"> <LinkedInIcon/> </a>
        </div>
      </header>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <section id="about" className="row" ref={refAbout}>
          <div className="mb-32 p-1 grid gap-x-4 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
            <motion.div
              initial={ 'hidden'}
              animate={inViewAbout ? 'visible' : 'hidden'}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
              transition={{ duration: 0.6 }}
              className="col-span-3 p-4 rounded-2xl border"
            >
              <h1 className="text-center text-7xl p-5 text-white">About me</h1>
              <h1 className="text-2xl text-white">
                Hello,<br /> My name is Oubaye and I am a computer science graduate
              </h1>
              <br />
              <p className="text-white">
                As a passionate and driven Computer Science graduate based in Lancaster, United Kingdom, with a Spanish
                nationality and a flair for technology, I am on a mission to leverage the power of innovation to solve
                complex challenges and make a positive impact on the world while also learning and improving on the way.
              </p>
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
               <div className="text-5xl"> <LinkedInIcon/> </div>
              <img className="rounded-full" src="/assets/mypic.jpeg" alt="Example" width={500} height={500} />
        
            </motion.div>
            
          </div>
        </section>
        <AnimatedBackground />
       
        <section id="projects" className="row p-20" ref={refProjects}>
        <motion.h1
              initial={'hidden'}
              animate={inViewProjects ? 'visible' : 'hidden'}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
              transition={{ duration: 0.6 }}
              className="col-span-2 text-center text-7xl">
                <h1 className="text-center text-7xl p-5 text-white">Projects</h1>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left p-4  rounded-2xl border">
              
            <a
              href="https://github.com/obeyyyy/lunar-lander"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:font-semibold hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="mb-3 text-2xl text-white font-semibold hover:text-black">
                Lunar Lander Game{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none  hover:text-black ">
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
              <h2 className="mb-3 text-2xl font-semibold text-white hover:text-black">
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
              <h2 className="mb-3 text-2xl font-semibold text-white hover:text-black">
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
              <h2 className="mb-3 text-2xl font-semibold text-white hover:text-black">
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
              className="grid grid-cols-2 gap-4"
            >

          <div className="col-span-1 border rounded-lg p-5">
            
            <h1 className="text-center text-white text-7xl p-3">Tech Stack</h1>
            <div className="grid grid-cols-2 gap-4 whitespace-pre">
              <div className="w-24 h-24 flex justify-center items-center hover:animate-spin text-red-500">
                <JavaIcon  size="4x"/> 3 years
              </div>
              <div className="w-24 h-24 flex justify-center items-center text-blue-500">
                <ReactIcon size="4x" /> 1 year
              </div>
              <div className="w-24 h-24 flex justify-center items-center text-orange-800">
                <Html5Icon size="4x" /> 3 years
              </div>
              <div className="w-24 h-24 flex justify-center items-center text-blue-800">
                <PythonIcon size="4x" /> 2 years
              </div>
              <div className="w-24 h-24 flex justify-center items-center text-cyan-500">
                <Css3Icon size="4x" /> 3 years
              </div>
              <div className="w-24 h-24 flex justify-center items-center text-green-500">
                <NodeJsIcon size="4x" /> 1 year
              </div>
              <div className="w-24 h-24 flex justify-center items-center font-bold text-white">
                 Next.js    1 year
              </div>
            </div>
          </div>

          <div className="col-span-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-5">
            <h1 className="text-center text-7xl p-5">Experience</h1>
            <div className="grid grid-rows-4 gap-4 whitespace-pre font-bold"><br></br>
              <div>Full stack Developer at Jordi Hans design (based in sweden)       2023 - ongoing :</div>
              Involved in developing a variety of mobile apps and websites using  technologies <br></br>such as react.js, wordpress and firebase database.
            </div>
          </div>




          <div className="col-span-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-5">
          <h1 className="text-center text-7xl p-5">Languages</h1>
          <div className="flex gap-4 items-center flags-container">
            <div>
              <Gb className="text-5xl" /> 
            </div> 
            <div>English</div>
            <div>

              <Es className="text-5xl" /> 
            </div> 
            <div>Spanish</div>

            <div>
              
              <Ma className="text-5xl" /> 
            </div> 
            <div>Arabic</div>

            <div>
              
              <Fr className="text-5xl" /> 
            </div> 
            <div>French</div>
          </div>
        </div>
     
        <div className="col-span-1 p-5 border rounded-full w-64 h-64 flex flex-col justify-center items-center mx-auto">
        <h1 className="text-center text-7xl p-5 text-white">CV</h1>
        <a
          href="/path/to/your/CV.pdf" // Replace with the actual path to your CV file
          download
          className="text-center text-3xl text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-black py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
        >
          <MarkdownIcon size="2px"/>
        </a>
        </div>
      </motion.div>
      
        </section>
       
      </main>

    </>
  );
}
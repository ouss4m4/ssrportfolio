import type { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { BsArrowDownCircle } from 'react-icons/bs';

import Experience from '../sections/Experience';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';

const Home: NextPage = () => {
  return (
    <>
      <section
        className="items-center hidden w-screen  md:flex md:flex-col bg-dark-500 h-screen" 
      >
        <div className="relative w-screen " style={{ height: '56%' }}>
          <Image
            src="/images/lander-optimised.jpeg"
            layout="fill"
            alt="avatar"
            quality="100"
          />
          <div className="absolute top-0 left-0 z-20 flex items-center justify-start w-full h-full ">
            <div className="flex flex-col lg:pl-20 xl:pl-32 2xl:pl-50">
              <h1 className="pb-8 text-white text-6xl font-lines">
                Hi, I&apos;m{' '}
                <span className="font-kaushan text-accent">Oussama</span>
              </h1>
              <div className="typewriter">
                <h3 className="text-3xl text-white font-lines">
                  Software Developer
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow pb-8"></div>
        <a href="#experience" className="text-white">
          <BsArrowDownCircle className="w-12 h-12 " />
        </a>
      </section>
      <Experience />
      <Projects />
      <Skills />
    </>
  );
};

export default Home;

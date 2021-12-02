import type { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { BsArrowDownCircle } from 'react-icons/bs';

import Experience from '../sections/Experience';
import Projects from '../sections/Projects';

const Home: NextPage = () => {
  return (
    <>
      <div
        className="items-center hidden w-screen justify-evenly md:flex md:flex-col bg-dark-500 "
        style={{ height: '100vh' }}
      >
        <div className="relative w-screen " style={{ height: '56%' }}>
          <Image
            src="/images/lander-optimised.jpeg"
            layout="fill"
            alt="avatar"
            quality="100"
          />
          <div className="absolute top-0 left-0 z-20 flex items-center justify-start w-full h-full hero-overlay">
            <div className="flex flex-col lg:pl-20 xl:pl-32 2xl:pl-50">
              <h1 className="pb-8 text-white text-7xl font-lines">
                Hi, I&apos;m{' '}
                <span className="font-kaushan text-accent">Oussama</span>
              </h1>
              <div className="typewriter">
                <h3 className="text-5xl text-white font-lines">
                  Software Developer
                </h3>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 z-10 w-full h-full second-overlay"></div>
        </div>
        <a href="#experience" className="text-white">
          <BsArrowDownCircle className="w-12 h-12 " />
        </a>
      </div>

      <Experience />
      <Projects />
    </>
  );
};

export default Home;

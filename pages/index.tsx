import type { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import {
  BsArrowDownCircle,
  BsLinkedin,
  BsGithub,
  BsTwitter,
  BsTelegram,
} from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { GiTie } from 'react-icons/gi';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineWhatsApp,
} from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GrDocumentPdf } from 'react-icons/gr';
import Experience from '../sections/Experience';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import Technologies from '../sections/Tools';
import Footer from '../sections/Footer';
const { motion } = require('framer-motion');
import { fadeInUp, stagger } from '../data/animation';

const Home: NextPage = () => {
  const resumeUrl =
    'https://drive.google.com/file/d/1HI1Eb2yF3QnbQMjIVCUK8A43eEkNFdn_/view?usp=sharing';
  const phonenum = '+213666095895';
  const socialClassname = () => {
    return 'w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-26  xl:h-26 3xl:w-32 3xl:h-32';
  };
  return (
    <>
      <section className="pb-2" id="top">
        {/* lg:lander */}
        <div className="relative hidden w-screen shadow-xl md:block">
          <Image
            src="/images/lander-optimised.jpeg"
            layout="responsive"
            alt="avatar"
            quality="100"
            width="1920"
            height="548"
            priority
          />
          <div className="absolute z-20 top-16 left-24 lg:h-full lg:top-0 lg:left-20 3xl:left-80">
            <div className="flex flex-col h-full lg:justify-center gap-y-2 lg:gap-y-8 3xl:gap-y-18">
              <h1 className="text-white md:text-3xl lg:text-5xl 3xl:text-8xl font-lines">
                Oussama Baaziz
              </h1>
              <div className="typewriter">
                <h3 className="text-xl text-white font-lines lg:text-3xl 3xl:text-6xl">
                  Software Developer
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* lg:socials */}
        <div
          className="hidden py-2 shadow-md md:block "
          style={{ background: '#f1f1f1' }}
        >
          {/* social icons 1st row */}
          <motion.div
            className="flex max-w-6xl py-6 mx-auto align-top justify-evenly 3xl:max-w-7xl "
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="relative tooltip  3xl:mx-12 3xl:mx-12"
              variants={fadeInUp}
            >
              <a
                href="https://www.linkedin.com/in/bzouss/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin className={socialClassname()} />
              </a>
              <span className="tooltiptext">LinkedIn</span>
            </motion.div>
            <motion.div
              className="relative tooltip  3xl:mx-12"
              variants={fadeInUp}
            >
              <a
                href="https://github.com/ouss4m4"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub className={socialClassname()} />
              </a>
              <span className="tooltiptext">Github</span>
            </motion.div>
            <motion.div
              className="relative tooltip  3xl:mx-12"
              variants={fadeInUp}
            >
              <a href={resumeUrl} target="_blank" rel="noreferrer">
                <GrDocumentPdf className={socialClassname()} />
              </a>
              <span className="tooltiptext">My Resume</span>
            </motion.div>

            <motion.div
              className="relative tooltip  3xl:mx-12"
              variants={fadeInUp}
            >
              <a
                href="https://twitter.com/0uss4m4"
                target="_blank"
                rel="noreferrer"
              >
                <BsTwitter className={socialClassname()} />
              </a>
              <span className="tooltiptext">Twitter</span>
            </motion.div>
            <motion.div
              className="relative tooltip  3xl:mx-12"
              variants={fadeInUp}
            >
              <a
                href="mailto:bz.oussama@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <SiGmail className={socialClassname()} />
              </a>
              <span className="tooltiptext">Email Me</span>
            </motion.div>
          </motion.div>
          <div className="flex max-w-xs mx-auto my-6 lg:max-w-lg lg:my-12 justify-evenly align-center gap-x-6">
            <a
              href={`https://wa.me/${phonenum}`}
              target="_blank"
              rel="noreferrer"
              role="button"
              className="relative block tooltip"
            >
              <AiOutlineWhatsApp className={socialClassname()} />
              <span className="tooltiptext">WhatsApp</span>
            </a>
            <a
              href="tg://resolve?domain=ouss4m4"
              target="_blank"
              rel="noreferrer"
              role="button"
              className="relative block tooltip"
            >
              <BsTelegram className={socialClassname()} />
              <span className="tooltiptext">Telegram</span>
            </a>
          </div>
        </div>
        {/* sm:lander */}
        <div className="md:hidden bg-dark-500">
          <div className="w-full text-whitetxt font-lines">
            <div className="relative flex items-center justify-center w-full h-56 max-w-sm mx-auto">
              <Image
                src="/images/avatar.jpg"
                alt="user avatar"
                quality="100"
                layout="fill"
              />
              {/*  <div className="absolute top-0 left-0 z-10 w-full h-full second-overlay"></div>
              <div className="absolute top-0 left-0 z-10 w-full h-full hero-overlay"></div> */}
            </div>
            <h3 className="max-w-md py-6 mx-auto text-4xl font-medium tracking-wider text-center font-headers">
              Oussama Baaziz
            </h3>
            <p className="max-w-md px-2 py-1 mx-auto my-3 text-lg font-bold tracking-wider text-center rounded-full bg-dark-700 font-headers">
              Software Developer
            </p>
            <a
              className="flex items-center justify-center max-w-md px-2 py-1 mx-auto my-3 text-lg font-medium rounded-full bg-dark-700"
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              <GiTie className="w-6 h-6" />
              Resume
            </a>
            {/* Social Buttons */}
            <div className="flex justify-around w-9/12 mx-auto my-5 ">
              <a
                href="https://github.com/ouss4m4"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub className="w-8 h-8 font-bold text-white cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/in/bzouss/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin className="w-8 h-8 text-white cursor-pointer" />
              </a>
              <a
                href="https://twitter.com/0uss4m4"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillTwitterCircle className="w-8 h-8 text-white cursor-pointer" />
              </a>
            </div>
            {/* Address */}
            <div className="max-w-md py-4 mx-auto my-5 rounded-md bg-dark-700">
              <div className="flex items-center justify-center space-x-2">
                <GoLocation />

                <span>El-Eulma, Algeria</span>
              </div>
              <div className="flex items-center justify-center my-4 space-x-2">
                <a
                  href={`https://wa.me/${phonenum}`}
                  target="_blank"
                  rel="noreferrer"
                  role="button"
                  className="relative block tooltip"
                >
                  <AiOutlineWhatsApp size="24" />
                  <span className="tooltiptext">WhatsApp</span>
                </a>
                <a
                  href="tg://resolve?domain=ouss4m4"
                  target="_blank"
                  rel="noreferrer"
                  role="button"
                  className="relative block tooltip"
                >
                  <BsTelegram size="24" />
                  <span className="tooltiptext">Telegram</span>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`tel:${phonenum}`}
                  className="text-white font-lines"
                >
                  {phonenum}
                </a>
              </div>
              <p className="my-2 text-lg text-center">bz.oussama@gmail.com</p>
            </div>
            {/* contact*/}
            <div className="flex justify-center pb-14">
              <button
                className="w-8/12 px-5 py-2 my-2 text-center rounded-full text-whitetxt bg-dark-700"
                onClick={() => window.open('mailto:bz.oussama@gmail.com')}
              >
                Email Me
              </button>
            </div>
          </div>
        </div>
      </section>
      <Experience />
      <Projects />
      <Skills />
      <Technologies />
      <Footer />
    </>
  );
};

export default Home;

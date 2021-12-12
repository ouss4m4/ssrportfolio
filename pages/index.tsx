import type { NextPage } from "next";
import Image from "next/image";
import React from "react";
import {
  BsArrowDownCircle,
  BsLinkedin,
  BsGithub,
  BsTwitter,
  BsTelegram,
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { GiTie } from "react-icons/gi";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Technologies from "../sections/Technologies";

const Home: NextPage = () => {
  return (
    <>
      <section>
        {/* lg:lander */}
        <div className="hidden md:block relative w-screen ">
          <Image
            src="/images/lander-optimised.jpeg"
            layout="responsive"
            alt="avatar"
            quality="100"
            width="1920"
            height="548"
          />
          <div className="absolute top-16 left-24 z-20 lg:h-full lg:top-0 lg:left-20 ">
            <div className="flex flex-col  h-full lg:justify-center gap-y-2 lg:gap-y-8">
              <h1 className=" text-white md:text-3xl lg:text-5xl font-lines">
                Oussama Baaziz
                {/* <span className="font-kaushan text-accent">Oussama</span> */}
              </h1>
              <div className="typewriter">
                <h3 className="text-xl text-white font-lines lg:text-3xl">
                  Software Developer
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* lg:socials */}
        <div
          className="hidden md:block py-12 xl:py-6"
          style={{ background: "#f1f1f1" }}
        >
          <div className=" flex max-w-6xl justify-evenly mx-auto  align-top h-full mb-14 pt-16">
            <div>
              <a href="#">
                <BsLinkedin className="w-14 h-14 md:w-20 md:h-20 " />
              </a>
            </div>
            <div>
              <a href="#">
                <BsGithub className="w-14 h-14 md:w-20 md:h-20 " />
              </a>
            </div>

            <div>
              <a href="#">
                <BsTwitter className="w-14 h-14 md:w-20 md:h-20 " />
              </a>
            </div>
            <div>
              <a href="#">
                <SiGmail className="w-14 h-14 md:w-20 md:h-20 " />
              </a>
            </div>
          </div>
          <div className="hidden xl:flex justify-center items-center">
            <a href="#experience" className="block">
              <BsArrowDownCircle className="w-14 h-14" />
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
            <h3 className="text-4xl py-6 font-medium tracking-wider font-headers text-center max-w-md mx-auto">
              Oussama Baaziz
            </h3>
            <p className="px-2 py-1 my-3 text-lg text-center font-bold tracking-wider rounded-full max-w-md mx-auto bg-dark-700 font-headers">
              Software Developer
            </p>
            <a
              className="flex items-center justify-center px-2 py-1 my-3 text-lg font-medium rounded-full max-w-md mx-auto bg-dark-700"
              href="https://drive.google.com/file/d/1uzQ5KZfsOw6u7q9iwO8Jnnyti4mwSaFA/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <GiTie className="w-6 h-6" />
              Resume
            </a>
            {/* Social Buttons */}
            <div className="flex justify-around w-9/12 mx-auto my-5 md:w-full">
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
            <div className="py-4 my-5 bg-dark-700 max-w-md mx-auto rounded-md">
              <div className="flex items-center justify-center space-x-2">
                <GoLocation />

                <span>El-Eulma, Algeria</span>
              </div>
              <div className="flex items-center justify-center my-4 space-x-2">
                <AiOutlineWhatsApp size="24" />
                <BsTelegram size="24" />
                <span className="text-white font-lines">+213 666 095 895</span>
              </div>
              <p className="my-2 text-lg text-center">bz.oussama@gmail.com</p>
            </div>
            {/* contact*/}
            <div className="flex justify-center pb-14">
              <button
                className="w-8/12 px-5 py-2 my-2 text-center rounded-full text-whitetxt bg-dark-700"
                onClick={() => window.open("mailto:bz.oussama@gmail.com")}
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
    </>
  );
};

export default Home;

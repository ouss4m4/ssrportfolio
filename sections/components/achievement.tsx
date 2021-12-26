import Image from 'next/image';
import { Properties } from 'csstype';
import { Children, FC, useEffect } from 'react';
import TechImage from './techimage';
import { ITech } from '../../data/techsinfo';
const { motion, useAnimation } = require('framer-motion');
import { useInView } from 'react-intersection-observer';
import { fadeInUp, slideInFromRight } from '../../data/animation';

const polygon = (left: boolean, bg?: string): Properties => ({
  width: '23%',
  height: '63%',
  background: bg ? bg : 'rgb(99 110 143)',
  borderRadius: left ? '0 33% 33% 0' : '33% 0 0 33%',
  float: left ? 'left' : 'right',
});

interface IAchievement {
  imgSrc: string;
  imgLabel: string;
  direction: string;
  tech: ITech[];
}

const Achievement: FC<IAchievement> = ({
  imgSrc,
  imgLabel,
  direction,
  tech,
  children,
}) => {
  const isLeft = direction === 'left';
  const fadeInControl = useAnimation();
  const rightSlideControl = useAnimation();

  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      fadeInControl.start(fadeInUp.animate);
      rightSlideControl.start(slideInFromRight.animate);
    }
  }, [fadeInControl, rightSlideControl, inView]);

  return (
    <div
      className={`flex flex-col items-center justify-around p-2 mt-14 md:relative 
      lg:mt-12 3xl:max-w-8xl 3xl:mx-auto  ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      } `}
      style={{ minHeight: '550px' }}
      ref={ref}
    >
      <motion.div
        className="relative z-10 "
        animate={fadeInControl}
        initial={fadeInUp.initial}
      >
        <Image
          src={`/images/${imgSrc}`}
          alt={imgLabel}
          width="700"
          height="500"
          quality="100"
          layout="intrinsic"
        />
      </motion.div>
      <div className="absolute hidden w-full h-full md:block">
        <div style={polygon(isLeft)}></div>
      </div>
      <motion.div
        className="z-10 max-w-sm lg:max-w-lg"
        initial={slideInFromRight.initial}
        animate={rightSlideControl}
      >
        {children}
        <div>
          <div className="flex flex-wrap justify-center mt-6 gap-x-5">
            {tech.map(({ filename, label, height, width, stack }) => (
              <TechImage
                filename={filename}
                label={label}
                height={height ? height : 80}
                width={width ? width : 80}
                stack={stack}
                key={filename}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Achievement;

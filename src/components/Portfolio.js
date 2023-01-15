import { ButtonCircleLeft, ButtonCircleRight } from "./shared/Button";
import iconArrowLeft from "../assets/icon-arrow-left.svg";
import iconArrowRight from "../assets/icon-arrow-right.svg";
import portfolio from "../portfolio";
import { useState } from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [index, setIndex] = useState(0);
  const [prevImg, setPrevImg] = useState(portfolio.length - 1);
  const [nextImg, setNextImg] = useState(1);

  const handleDecreaseIndex = () => {
    setIndex(prevState => {
      return index === 0 ? portfolio.length - 1 : prevState - 1;
    });

    setPrevImg(prevState => {
      return prevImg === 0 ? portfolio.length - 1 : prevState - 1;
    });

    setNextImg(prevState => {
      return nextImg === 0 ? portfolio.length - 1 : prevState - 1;
    });
  };

  const handleIncreaseIndex = () => {
    setIndex(prevState => {
      return index !== portfolio.length - 1 ? prevState + 1 : 0;
    });

    setPrevImg(prevState => {
      return prevImg !== portfolio.length - 1 ? prevState + 1 : 0;
    });

    setNextImg(prevState => {
      return nextImg !== portfolio.length - 1 ? prevState + 1 : 0;
    });
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { x: -500, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className=" flex flex-col justify-center items-center gap-6 mt-14  ">
      <h4 className=" text-2xl text-base-100 font-medium lg:text-4xl">
        My Work
      </h4>
      <motion.div
        className=" flex justify-center items-center max-h-[400px] "
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          className=" object-cover rounded-lg w-[80%] absolute left-[-75%] md:max-h-[350px] md:left-[-70%] lg:left-[-620px] "
          src={portfolio[prevImg].image}
          alt=""
          variants={item}
        />
        <motion.img
          className=" rounded-lg w-[80%] m-auto md:w-full md:max-h-[350px] "
          src={portfolio[index].image}
          alt=""
          variants={item}
        />
        <motion.img
          className="object-cover rounded-lg w-[80%] absolute right-[-75%]  md:max-h-[350px] md:right-[-70%] lg:right-[-620px]  "
          src={portfolio[nextImg].image}
          alt=""
          variants={item}
        />
      </motion.div>
      <div className="flex justify-center items-center gap-4">
        <ButtonCircleLeft
          icon={iconArrowLeft}
          handleDecreaseIndex={handleDecreaseIndex}
        />
        <ButtonCircleRight
          icon={iconArrowRight}
          handleIncreaseIndex={handleIncreaseIndex}
        />
      </div>
    </section>
  );
};
export default Portfolio;

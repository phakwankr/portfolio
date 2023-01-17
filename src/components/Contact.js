import { Button } from "./shared/Contactinf";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useState } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <InView threshold={0.25} onChange={(inView) => setIsVisible(inView)}>
      {({ ref }) => (
        <motion.section
          className={` flex flex-col justify-center items-center mt-20 bg-base-100 px-6 py-10 gap-6 text-center rounded-lg lg:flex-row lg:py-20 lg:pl-10 lg:pr-20 ${isVisible ? 'glassmorphism-visible' : 'glassmorphism-hidden'}`}
          ref={ref}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className=" flex flex-col justify-center items-center gap-6 lg:items-start ">
            <h4 className=" text-2xl font-medium text-white ">
              Get In Touch
            </h4>
            <p className="lg:text-left lg:max-w-[70%]">
              I’d love to have a chat to see how I can help you.
              </p>
          </div>
            <Button bgColor="bg-secondary hover:bg-accent" />
            </motion.section>
            )}
          </InView>
        );
      };
export default Contact;

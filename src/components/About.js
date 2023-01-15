import { Button } from "./shared/Button";
import profilePic from "../assets/image-amy.webp";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

const About = () => {
  return (
    <InView threshold={0.25}>
      {({ ref, inView }) => (
        <motion.section
          className=" min-h-screen flex flex-col justify-center items-center gap-6 text-center md:flex-row md:min-h-[60vh] lg:min-h-[70vh]"
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            className=" w-[90%] max-w-[450px] md:translate-x-[-20%] md:flex-1 md:w-[500px] "
            src={profilePic}
            alt=""
          />
          <div className=" flex flex-col items-center justify-center gap-6 md:items-start  ">
            <h3 className=" text-2xl font-semibold text-base-100 md:text-left md:w-full md:text-4xl ">
              I’m Amy, and I’d love to work on your next project
            </h3>
            <p className=" text-neutral-content leading-7 md:text-left ">
              I love working with others to create beautiful design solutions.
              I’ve designed everything from brand illustrations to complete
              mobile apps. I’m also handy with a camera!
            </p>
            <Button bgColor="bg-secondary hover:bg-accent" />
          </div>
        </motion.section>
      )}
    </InView>
  );
};
export default About;

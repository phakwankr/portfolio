import { Button } from "./shared/Button";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Cta = () => {
  return (
    <InView threshold={0.25}>
      {({ ref, inView }) => (
        <motion.section
          className=" flex flex-col justify-center items-center mt-20 bg-base-100 px-6 py-10 gap-6 text-center rounded-lg lg:flex-row lg:py-20 lg:pl-10 lg:pr-20"
          ref={ref}
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className=" flex flex-col justify-center items-center gap-6 lg:items-start ">
            <h4 className=" text-2xl font-medium text-white ">
              Book a call with me
            </h4>
            <p className="lg:text-left lg:max-w-[70%]">
              I’d love to have a chat to see how I can help you. The best first
              step is for us to discuss your project during a free consultation.
              Then we can move forward from there.
            </p>
          </div>
          <Button bgColor="bg-secondary hover:bg-accent" />
        </motion.section>
      )}
    </InView>
  );
};
export default Cta;

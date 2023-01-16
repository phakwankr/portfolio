import Cards from "./shared/Cards";
import uiUxDesign from "../assets/pattern-ui-ux.svg";
import { motion } from "framer-motion";

const Skills = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="grid grid-cols-2 gap-6 my-8 md:grid-cols-4 md:grid-rows-3 lg:grid-rows-2"
      variants={container}
      initial="hidden"
      animate="visible"
    >

<Cards
        text="Motion Graphics"
        graphic={uiUxDesign}
        layout="col-span-2 bg-[#552049] gap-10"
        item={item}
      />
    </motion.div>
  );
};
export default Skills;

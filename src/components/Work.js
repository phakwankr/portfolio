import Cards from "../components/shared/Cards";
import graphicDesign from "../assets/pattern-graphic-design.svg";
import uiUxDesign from "../assets/pattern-ui-ux.svg";
import appsDesign from "../assets/pattern-apps.svg";
import illustrationsDesign from "../assets/pattern-illustrations.svg";
import photographyDesign from "../assets/pattern-photography.svg";
import motionDesign from "../assets/pattern-motion-graphics.svg";
import { motion } from "framer-motion";

const Work = () => {
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
        text="Graphic Design"
        graphic={graphicDesign}
        layout="row-span-3 gap-16 col-span-2 bg-primary md:row-span-2 lg:row-span-2 lg:col-span-1 lg:"
        item={item}
      />
      <Cards
        text="UI/UX"
        graphic={uiUxDesign}
        layout=" gap-7  bg-accent  "
        item={item}
      />
      <Cards
        text="Apps"
        graphic={appsDesign}
        layout=" gap-7  bg-[#F39E9E] "
        item={item}
      />
      <Cards
        text="Illustrations"
        graphic={illustrationsDesign}
        layout="col-span-2 bg-secondary gap-10"
        item={item}
      />
      <Cards
        text="Photography"
        graphic={photographyDesign}
        layout="col-span-2 bg-[#61C4B7] gap-10 lg:col-start-4 lg:row-start-1"
        item={item}
      />
      <Cards
        text="Motion Graphics"
        graphic={motionDesign}
        layout="col-span-2 bg-[#552049] gap-10"
        item={item}
      />
    </motion.div>
  );
};
export default Work;

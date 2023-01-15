import { motion } from "framer-motion";

const Cards = ({ text, graphic, layout, item }) => {
  return (
    <motion.div
      className={`  p-5 rounded-md text-neutral text-2xl font-medium flex flex-col justify-between ${layout}`}
      variants={item}
    >
      <div className="flex justify-end">
        <img src={graphic} alt="" />
      </div>
      <h2>{text}</h2>
    </motion.div>
  );
};
export default Cards;

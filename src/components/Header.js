import logo from "../assets/logo.svg";
import { motion } from "framer-motion";
import '/workspaces/portfolio/src/styles.css'

const Header = () => {
  return (
    <header>
      <div className=" flex justify-between py-4 min-h-12 ">
      <motion.img
          className="icon"
          src={logo}
          alt="personal logo"
          whileHover={{ rotate: 90 }}
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 5,
          }}
        />
      </div>
    </header>
  );
};
export default Header;

import logo from "../assets/logo.svg";
import { Button } from "./shared/Button";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header>
      <div className=" flex justify-between py-4 min-h-12 ">
        <motion.img
          className=" w-12 "
          src={logo}
          alt="personal logo"
          whileHover={{ rotate: 90 }}
          initial={{ scale: 0 }}
          animate={{ rotate: 180, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 5,
          }}
        />
        <Button bgColor="bg-base-100" />
      </div>
    </header>
  );
};
export default Header;

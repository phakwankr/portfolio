import logo from "../assets/logo.svg";
import { Button } from "./shared/Button";

const Footer = () => {
  return (
    <header>
      <div className=" flex justify-between pt-10 pb-8 min-h-12 ">
        <img className=" w-12 " src={logo} alt="personal logo" />
        <Button bgColor="bg-base-100" />
      </div>
    </header>
  );
};
export default Footer;

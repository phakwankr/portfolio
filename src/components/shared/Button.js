export const Button = ({ bgColor }) => {
  return (
    <button
      className={`${bgColor} btn border-none  text-neutral rounded-full text-xs 
      px-6 hover:bg-primary hover:border-none transition-all ease-in delay-[50] lg:px-10`}
    >
      Free Consultation
    </button>
  );
};

export const ButtonCircleLeft = ({ icon, handleDecreaseIndex }) => {
  return (
    <button className=" btn border-none bg-base-100 rounded-full w-16 h-16 hover:bg-primary " aria-label="arrow pointing left">
      <img src={icon} alt="" onClick={handleDecreaseIndex} />
    </button>
  );
};

export const ButtonCircleRight = ({ icon, handleIncreaseIndex }) => {
  return (
    <button className=" btn border-none bg-base-100 rounded-full w-16 h-16 hover:bg-primary " aria-label="arrow pointing right">
      <img src={icon} alt="" onClick={handleIncreaseIndex} />
    </button>
  );
};

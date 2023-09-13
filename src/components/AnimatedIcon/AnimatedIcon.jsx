/* eslint-disable react/prop-types */
import Lottie from "lottie-react";

const AnimatedIcon = ({ icon, loop = true }) => {
  return <Lottie animationData={icon} loop={loop} />;
};

export default AnimatedIcon;

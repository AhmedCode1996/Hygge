import { useState } from "react";
import { REVIEWS } from "../data/data";

const useSliderIndex = () => {
  const length = REVIEWS.length;
  const [slideIndex, setSlideIndex] = useState(0);

  const handlePrev = () => {
    setSlideIndex((prev) => (prev - 1 + length) % length);
  };

  const handleNext = () => {
    setSlideIndex((prev) => (prev + 1) % length);
  };

  return { slideIndex, handleNext, handlePrev };
};

export default useSliderIndex;

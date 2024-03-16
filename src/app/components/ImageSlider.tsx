import { ReactNode } from "react";

interface SliderProps {
  children: ReactNode;
  className?: string;
}

const ImageSlider = ({ children, className }: SliderProps) => {
  return (
    <div
      className={`${className} inline-flex pl-6 gap-6 w-auto animate-[scroll_20s_linear_infinite]`}
    >
      {/* <div></div> */}
      {children}
      {children}
    </div>
  );
};

export default ImageSlider;

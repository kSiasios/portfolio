// const SideSection = () => {
//   ;
// };

import { ReactNode } from "react";

interface ChildComponentProps {
  children?: ReactNode;
  className?: String;
}

const SideSection: React.FC<ChildComponentProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`${
        className ? className : ""
      } w-full sm:w-1/2 relative h-screen`}
    >
      {!children && <p>Hi there!</p>}
      {children && <div className="grid grid-cols-2 h-full">{children}</div>}
    </div>
  );
};

export default SideSection;

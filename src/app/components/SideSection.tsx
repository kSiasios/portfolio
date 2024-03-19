// const SideSection = () => {
//   ;
// };

import { ReactNode } from "react";

interface ChildComponentProps {
  children?: ReactNode;
  className?: String;
  id?: string;
  useGrid?: Boolean;
}

const SideSection: React.FC<ChildComponentProps> = ({
  children,
  className,
  id,
  useGrid = true,
}) => {
  return (
    <div
      className={`${
        className ? className : ""
      } w-full md:w-1/2 relative md:h-full overflow-hidden`}
      id={id ? id : ""}
    >
      {!children && <p>Hi there!</p>}
      {children && useGrid && (
        <div className="grid xs:grid-cols-2 h-full  w-full">{children}</div>
      )}
      {children && !useGrid && (
        <div className="flex h-full md:w-1/2 w-full">{children}</div>
      )}
    </div>
  );
};

export default SideSection;

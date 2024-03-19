import Image from "next/image";
import { LuExternalLink } from "react-icons/lu";

interface Props {
  gradientColor?: String;
  className?: String;
}

const ProjectCard: React.FC<Props> = ({ gradientColor, className }) => {
  const colors = {
    red: "#FF7575",
    orange: "#FFCC7E",
    green: "#50FFC0",
    blue: "#50CAFF",
    indigo: "#A68FFF",
    purple: "#DB75FF",
    pink: "#FF7EB4",
  };

  const colorBG = {
    red: `bg-[#FF7575]`,
    orange: `bg-[#FFCC7E]`,
    green: `bg-[#50FFC0]`,
    blue: `bg-[#50CAFF]`,
    indigo: `bg-[#A68FFF]`,
    purple: `bg-[#DB75FF]`,
    pink: `bg-[#FF7EB4]`,
  };

  const colorGradients = {
    red: `from-[#FF7575] to-[#FF7575]/0`,
    orange: `from-[#FFCC7E] to-[#FFCC7E]/0`,
    green: `from-[#50FFC0] to-[#50FFC0]/0`,
    blue: `from-[#50CAFF] to-[#50CAFF]/0`,
    indigo: `from-[#A68FFF] to-[#A68FFF]/0`,
    purple: `from-[#DB75FF] to-[#DB75FF]/0`,
    pink: `from-[#FF7EB4] to-[#FF7EB4]/0`,
  };

  // const colorClass = colorIndex
  //   ? `from-[${colorGradients[colorIndex].toLowerCase()}] to-[${colorGradients[
  //       colorIndex
  //     ].toLowerCase()}]/0`
  //   : `from-[${colorGradients[0].toLowerCase()}] to-[${colorGradients[0].toLowerCase()}]/0`;

  return (
    <div className="relative group shadow-[inset_0_0_0_2px_rgba(255,255,255,1)] z-0">
      <div className="absolute top-0 left-0 w-full h-full shadow-[inset_0_0_0_2px_rgba(255,255,255,1)]">
        <Image
          src="https://picsum.photos/200/300"
          width={1000}
          height={1000}
          alt="Image"
          className="h-full z-30 object-cover"
        />
      </div>
      {/* <div className={`group-hover:block hidden absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[${colorGradients[0]}] to-[${colorGradients[0]}] z-40`}> */}
      <div
        className={`${
          colorGradients[gradientColor as keyof typeof colorGradients]
        } shadow-[inset_0_0_0_2px_rgba(255,255,255,.15)] items-center justify-center group-hover:opacity-100 focus-within:opacity-100 group-hover:animate-fadeIn focus-within:animate-fadeIn opacity-0 flex absolute top-0 left-0 w-full h-full bg-gradient-to-t z-20`}
      >
        {/* Content revealed on hover */}
        <button className="inline-flex gap-1 items-center font-bold hover:bg-black/90 focus:bg-black/90 bg-black/70 backdrop-blur-sm px-4 py-2 hover:shadow-[-.5rem_.5rem_white,inset_0_0_0_2px_rgba(255,255,255,.15)] focus:shadow-[-.5rem_.5rem_white,inset_0_0_0_2px_rgba(255,255,255,.15)] transition-[box-shadow_background-color] ease-linear duration-200">
          Open Project <LuExternalLink />
        </button>
      </div>
      <div
        className={`${
          gradientColor
            ? colorBG[gradientColor as keyof typeof colorBG]
            : "bg-cyan-400"
        } xs:hidden absolute h-full w-5 z-50`}
      ></div>
    </div>
  );
};

export default ProjectCard;

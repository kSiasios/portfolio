import Image from "next/image";
import { LuExternalLink } from "react-icons/lu";

interface Props {
  gradientColor?: String;
  className?: String;
}

const ProjectCard: React.FC<Props> = ({ gradientColor, className }) => {
  const colorSwatches = {
    red: "from-[#FF7575] to-[#FF7575]/0",
    orange: "from-[#FFCC7E] to-[#FFCC7E]/0",
    green: "from-[#50FFC0] to-[#50FFC0]/0",
    blue: "from-[#50CAFF] to-[#50CAFF]/0",
    indigo: "from-[#A68FFF] to-[#A68FFF]/0",
    purple: "from-[#DB75FF] to-[#DB75FF]/0",
    pink: "from-[#FF7EB4] to-[#FF7EB4]/0",
  };

  // const colorClass = colorIndex
  //   ? `from-[${colorSwatches[colorIndex].toLowerCase()}] to-[${colorSwatches[
  //       colorIndex
  //     ].toLowerCase()}]/0`
  //   : `from-[${colorSwatches[0].toLowerCase()}] to-[${colorSwatches[0].toLowerCase()}]/0`;

  return (
    <div className="relative group shadow-[inset_0_0_0_2px_rgba(255,255,255,.15)]">
      <div className="absolute top-0 left-0 w-full h-full ">
        <Image
          src="https://picsum.photos/200/300"
          width={1000}
          height={1000}
          alt="Image"
          className="h-full z-30 object-cover"
        />
      </div>
      {/* <div className={`group-hover:block hidden absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[${colorSwatches[0]}] to-[${colorSwatches[0]}] z-40`}> */}
      <div
        className={`items-center justify-center group-hover:opacity-1 group-hover:animate-fadeIn opacity-0 flex absolute top-0 left-0 w-full h-full bg-gradient-to-t z-20 ${
          gradientColor
            ? colorSwatches[gradientColor as keyof typeof colorSwatches]
            : "from-white to-white/0"
        }`}
      >
        {/* Content revealed on hover */}
        <button className="inline-flex gap-1 items-center font-bold hover:bg-black/90 focus:bg-black/90 bg-black/70 backdrop-blur-sm px-4 py-2 hover:shadow-[-.5rem_.5rem_white,inset_0_0_0_2px_rgba(255,255,255,.15)] focus:shadow-[-.5rem_.5rem_white,inset_0_0_0_2px_rgba(255,255,255,.15)] transition-[box-shadow_background-color] ease-linear duration-200">
          Open Project <LuExternalLink />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;

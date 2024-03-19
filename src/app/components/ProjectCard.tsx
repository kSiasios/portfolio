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
    red: `bg-[${colors["red"]}]`,
    orange: `bg-[${colors["orange"]}]`,
    green: `bg-[${colors["green"]}]`,
    blue: `bg-[${colors["blue"]}]`,
    indigo: `bg-[${colors["indigo"]}]`,
    purple: `bg-[${colors["purple"]}]`,
    pink: `bg-[${colors["pink"]}]`,
  };

  const pseudoColorBG = {
    red: `before:bg-[${colors["red"]}]`,
    orange: `before:bg-[${colors["orange"]}]`,
    green: `before:bg-[${colors["green"]}]`,
    blue: `before:bg-[${colors["blue"]}]`,
    indigo: `before:bg-[${colors["indigo"]}]`,
    purple: `before:bg-[${colors["purple"]}]`,
    pink: `before:bg-[${colors["pink"]}]`,
  };

  const colorGradients = {
    red: `from-[${colors["red"]}] to-[${colors["red"]}]/0`,
    orange: `from-[${colors["orange"]}] to-[${colors["orange"]}]/0`,
    green: `from-[${colors["green"]}] to-[${colors["green"]}]/0`,
    blue: `from-[${colors["blue"]}] to-[${colors["blue"]}]/0`,
    indigo: `from-[${colors["indigo"]}] to-[${colors["indigo"]}]/0`,
    purple: `from-[${colors["purple"]}] to-[${colors["purple"]}]/0`,
    pink: `from-[${colors["pink"]}] to-[${colors["pink"]}]/0`,
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
        className={` shadow-[inset_0_0_0_2px_rgba(255,255,255,.15)] items-center justify-center group-hover:opacity-100 focus-within:opacity-100 group-hover:animate-fadeIn focus-within:animate-fadeIn opacity-0 flex absolute top-0 left-0 w-full h-full bg-gradient-to-t z-20 ${
          gradientColor
            ? colorGradients[gradientColor as keyof typeof colorGradients]
            : "from-white to-white/0"
        }`}
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

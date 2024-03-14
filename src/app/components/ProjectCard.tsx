import Image from "next/image";

const ProjectCard = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-full ">
        <Image
          src="https://picsum.photos/200/300"
          width={1000}
          height={1000}
          alt="Image"
          className="h-full z-30"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white to-white/0 z-40">
        {/* Content revealed on hover */}
      </div>
    </div>
  );
};

export default ProjectCard;

import React from "react";

const ProjectCard: React.FC = () => {
  return (
    <div
      className="w-80 h-full bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm overflow-hidden hover:scale-105 duration-500 transform transition cursor-pointer">
      <img

        className="h-56 w-full object-cover"
        src="./assets/h2w_cover.webp"
        alt="" />
      <div className="p-5">
        <p className="text-sm font-semibold text-gray-400">by John Smith</p>
        <h1 className="text-2xl font-bold">El poder de la lampara</h1>
        <p className="text-lg font-semibold text-gray-400">by John Smith</p>
        <p className="mt-1 font-">Lorem ipsum carrots, enhanced undergraduate developer,
          but they do occaecat time and vitality, Lorem ipsum carrots,
          enhanced undergraduate developer, but they do occaecat time
          and vitality</p>
      </div>
    </div>
  );
};

export default ProjectCard;
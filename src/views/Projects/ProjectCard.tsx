import moment from "moment";
import { ProjectItem } from "./type";

interface ProjectCardProps {
  item: ProjectItem;
}

const ProjectCard = ({ item }: ProjectCardProps) => {
  console.log(item.releaseDate);
  return (
    <div
      className="w-80 h-full bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm overflow-hidden hover:scale-105 duration-500 transform transition cursor-pointer"
      onClick={() => window.open(item.href, "_blank", "noopener,noreferrer")}
    >
      <img className="h-56 w-full object-cover" src={item.imageSrc ?? ""} alt="" />
      <div className="p-5">
        <p className="text-sm font-semibold text-gray-400">
          {item.releaseDate ? moment(item.releaseDate).format("MMMM yyyy") : "Not released yet"}
        </p>
        <h1 className="text-2xl font-bold">{item.title}</h1>
        <p className="text-lg font-semibold text-gray-400">{item.briefDescription}</p>
        <p className="mt-1 font-">{item.description}</p>
      </div>
    </div>
  );
};

export { ProjectCard };

import moment from "moment";
import { ProjectItem } from "./type";

interface ProjectCardProps {
  project: ProjectItem;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div
      className="w-80 h-full bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm overflow-hidden hover:scale-105 duration-500 transform transition cursor-pointer rounded-md"
      onClick={() => window.open(project.href, "_blank", "noopener,noreferrer")}
    >
      <img className="h-56 w-full object-cover" src={project.imageSrc ?? ""} alt="" />
      <div className="p-5">
        <p className="text-sm font-semibold text-gray-400">
          {project.releaseDate ? moment(project.releaseDate).format("MMMM yyyy") : "Not released yet"}
        </p>
        <h1 className="text-2xl font-bold">{project.title}</h1>
        <p className="text-lg font-semibold text-gray-400">{project.briefDescription}</p>
        <p className="mt-1 font-">{project.description}</p>
      </div>
    </div>
  );
};

export { ProjectCard };

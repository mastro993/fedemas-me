import { Section } from "../../components/Section";
import { ProjectCard } from "./ProjectCard";
import { ProjectItem } from "./type";

const projects: ReadonlyArray<ProjectItem> = [
  {
    title: "VerificaC19 for Flutter",
    briefDescription: "DGC validation package",
    description:
      "VerificaC19 for Flutter is a Flutter/Dart package that allows Flutter applications to validate Digital Green Certificates (Covid19 GreenPass).",
    href: "https://github.com/mastro993/verificaC19-flutter",
    imageSrc: "./assets/verificac19.jpg",
    releaseDate: new Date(2021, 11, 29),
  },
];

const Projects = () => {
  return (
    <Section title="Projects" subtitle="Creations and collabs">
      <div className="flex mt-8 overflow-visible">
        <div className="flex flex-nowrap space-x-6 ">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export { Projects };

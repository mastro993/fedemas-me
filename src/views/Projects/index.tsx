import React from "react";
import { Section } from "../../components/Section";
import ProjectCard from "./components/ProjectCard";
import { ProjectItem } from "./type";

const Projects: React.FC = () => {
  const items: ProjectItem[] = [
    {
      title: "VerificaC19 for Flutter",
      briefDescription: "DGC validation package",
      description:
        "VerificaC19 for Flutter is a Flutter/Dart package that allows Flutter applications to validate Digital Green Certificates (Covid19 GreenPass).",
      href: "https://github.com/mastro993/verificaC19-flutter",
      imageSrc: "https://www.dgc.gov.it/web/img/img-verificaC19.png",
      releaseDate: new Date(2021, 11, 29),
    },
  ];
  return (
    <Section>
      <p className="md:text-3xl text-2xl uppercase font-bold italic">Projects</p>
      <p className="md:text-lg text-base text-gray-400 uppercase font-bold italic">Creations and collabs</p>
      <div className="flex overflow-clip mt-8">
        <div className="flex flex-nowrap space-x-6">
          {items.map((it) => (
            <ProjectCard item={it} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;

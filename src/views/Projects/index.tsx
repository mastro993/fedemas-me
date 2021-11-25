import React from "react";
import { Section } from "../../components/Section";
import ProjectCard from "./components/ProjectCard";

const Projects: React.FC = () => {

  return (
    <Section>
      <p className="md:text-3xl text-2xl font-bold uppercase font-bold italic">Projects</p>
      <p className="md:text-lg text-base text-gray-400 uppercase font-bold italic">Creations and collabs</p>
      <div className="flex overflow-clip mt-8">
       <div className="flex flex-nowrap space-x-6">
         <ProjectCard />
         <ProjectCard />
       </div>
      </div>
    </Section>
  );
};

export default Projects;
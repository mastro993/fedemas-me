import React from "react";
import { Section } from "../../components/Section";
import { EducationCard } from "./EducationCard";
import { EducationItem } from "./types";

const educationItems: ReadonlyArray<EducationItem> = [
  {
    title: "Computer, Electronic and Communications Engineering (L-8)",
    institute: "Università degli Studi di Parma",
    logoUrl: "./assets/unipr.png",
    type: "Bachelor of Engineering - BE",
    startingYear: 2013,
    endingYear: 2018,
    details: 'Thesis: "Development of an App for Sustainable Mobility through Gamification"',
  },
  {
    title: "Accounting",
    type: "Diploma",
    institute: "Istituto P. Belmesseri, Fivizzano (MS) Italy",
    startingYear: 2008,
    endingYear: 2013,
  },
];

const Education: React.FC = () => {
  return (
    <Section title="Education" subtitle="Good ol' days">
      <div className="mt-6 p-6 bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm rounded-md">
        <div className="flex flex-col">
          {educationItems.map((education, index) => (
            <EducationCard key={education.title} education={education} isLast={index === educationItems.length - 1} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export { Education };

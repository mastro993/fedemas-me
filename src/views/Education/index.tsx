import React from "react";
import { Section } from "../../components/Section";
import { EducationCard } from "./EducationCard";
import { EducationItem } from "./types";

const educationItems: ReadonlyArray<EducationItem> = [
  {
    title: "Computer, Electronic and Communications Engineering (L-8)",
    type: "Bachelor of Engineering - BE",
    place: "Università degli Studi di Parma",
    startingYear: 2013,
    endingYear: 2018,
    details: 'Thesis: "Development of an App for Sustainable Mobility through Gamification"',
  },
  {
    title: "Accounting",
    type: "Diploma",
    place: "Istituto P. Belmesseri, Fivizzano (MS) Italy",
    startingYear: 2008,
    endingYear: 2013,
  },
];

const Education: React.FC = () => {
  return (
    <Section title="Education" subtitle="Good ol' days">
      <div className="mt-6 px-4 py-3 flex flex-col bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm rounded-md">
        {educationItems.map((education) => (
          <EducationCard key={education.title} education={education} />
        ))}
      </div>
    </Section>
  );
};

export { Education };

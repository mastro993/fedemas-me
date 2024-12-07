import React from "react";
import { Section } from "../../components/Section";
import { EducationCard } from "./EducationCard";
import { EducationItem } from "./types";

const items: ReadonlyArray<EducationItem> = [
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
    <Section>
      <p className="md:text-3xl text-2xl uppercase font-bold italic">Education</p>
      <p className="md:text-lg text-base text-gray-400 uppercase font-bold italic">Good ol' days</p>
      <div className="mt-6 flex flex-col md:gap-4 gap-2">
        {items.map((it) => (
          <EducationCard key={it.title} item={it} />
        ))}
      </div>
    </Section>
  );
};

export { Education };

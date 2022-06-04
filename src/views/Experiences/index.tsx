import React from "react";
import { Section } from "../../components/Section";
import JobCard from "./components/JobCard";
import { JobItem } from "./types";

const Experiences: React.FC = () => {
  const items: JobItem[] = [
    {
      companyName: "Develon srl",
      role: "Frontend Engineer",
      location: "Vicenza, Italy (Remote)",
      startDate: new Date(2022, 1),
      summary: "Development of the Pharmaround Mobile App with Flutter",
      type: "Full time",
      companyLogoSrc: "./assets/develon.jpeg",
    },
    {
      companyName: "Fincantieri NexTech SpA",
      role: "Software Engineer",
      location: "La Spezia, Italy",
      startDate: new Date(2019, 3),
      endDate: new Date(2022, 1),
      summary:
        "Desktop Applications development with wxWidgets and Qt.\n" +
        "Frontend Development with reactive frameworks (ReactJs, VueJs) with Javascript (ES6) and Typescript.\n" +
        "Embedded and UNIX based systems software development (C/C++).",
      type: "Full time",
      companyLogoSrc: "./assets/nextech.jpg",
    },
    {
      companyName: "Esaedro srl",
      role: "Android Developer",
      location: "Parma, Italy",
      startDate: new Date(2018, 9),
      endDate: new Date(2019, 2),
      summary: "Design and development of native Android applications connected to custom ERP.",
      type: "Stage",
      companyLogoSrc: "./assets/esaedro.jpg",
    },
  ];

  return (
    <Section>
      <p className="md:text-3xl text-2xl font-bold uppercase italic">Work experiences</p>
      <p className="md:text-lg text-base text-gray-400 uppercase font-bold italic">What I do for living</p>
      <div className="flex flex-col mt-6 md:gap-4 gap-2">
        {items.map((it) => (
          <JobCard item={it} />
        ))}
      </div>
    </Section>
  );
};

export default Experiences;

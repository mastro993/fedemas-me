import { Section } from "../../components/Section";
import { WorkExperienceCard } from "./JobCard";
import { WorkExperienceItem } from "./types";

const workExperiences: ReadonlyArray<WorkExperienceItem> = [
  {
    companyName: "PagoPA S.p.A.",
    companyLogoSrc: "./assets/pagopa.jpeg",
    location: "Rome, Italy (Remote)",
    roles: [
      {
        role: "Senior Mobile Software Engineer",
        startDate: new Date(2022, 10),
        summary: "Development of the IO Mobile App with React Native",
        type: "full-time",
      },
    ],
    skills: ["React Native", "Typescript", "React", "Git", "CI/CD"],
  },
  {
    companyName: "Develon S.r.l.",
    companyLogoSrc: "./assets/develon.jpeg",
    location: "Vicenza, Italy (Remote)",
    roles: [
      {
        role: "Mobile Software Engineer",
        startDate: new Date(2022, 1),
        endDate: new Date(2022, 10),
        summary: "Development of the Pharmaround Mobile App with Flutter",
        type: "full-time",
      },
    ],
    skills: ["Flutter", "Dart"],
  },
  {
    companyName: "Fincantieri NexTech SpA",
    companyLogoSrc: "./assets/nextech.jpg",
    location: "La Spezia, Italy",
    roles: [
      {
        role: "Software Engineer",
        startDate: new Date(2019, 3),
        endDate: new Date(2022, 1),
        summary: "Desktop and embedded software development with C/C++",
        type: "full-time",
      },
    ],
    skills: ["C", "C++"],
  },
  {
    companyName: "Esaedro srl",
    companyLogoSrc: "./assets/esaedro.jpg",
    location: "Parma, Italy",
    roles: [
      {
        role: "Junior Android Software Engineer",
        startDate: new Date(2018, 9),
        endDate: new Date(2019, 2),
        summary: "Design and development of native Android applications connected to custom ERP.",
        type: "internship",
      },
    ],
    skills: ["Kotlin", "Android", "Java"],
  },
];

const Experiences = () => {
  return (
    <Section title="Experiences" subtitle="What I do for living">
      <div className="mt-6 p-6 bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm rounded-md">
        <div className="flex flex-col">
          {workExperiences.map((experience, index) => (
            <WorkExperienceCard
              key={experience.companyName}
              experience={experience}
              isLast={index === workExperiences.length - 1}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export { Experiences };

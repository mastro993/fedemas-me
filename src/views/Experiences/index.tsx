import { Section } from "../../components/Section";
import { JobCard } from "./JobCard";
import { JobItem } from "./types";

const items: ReadonlyArray<JobItem> = [
  {
    companyName: "PagoPA S.p.A.",
    role: "Mobile Software Engineer",
    location: "Rome, Italy (Remote)",
    startDate: new Date(2022, 10),
    summary: "Development of the IO Mobile App with React Native",
    type: "Full time",
    companyLogoSrc: "./assets/pagopa.jpeg",
  },
  {
    companyName: "Develon S.r.l.",
    role: "Mobile Software Engineer",
    location: "Vicenza, Italy (Remote)",
    startDate: new Date(2022, 1),
    endDate: new Date(2022, 10),
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
    summary: "Desktop and embedded software development with C/C++",
    type: "Full time",
    companyLogoSrc: "./assets/nextech.jpg",
  },
  {
    companyName: "Esaedro srl",
    role: "Android Engineer",
    location: "Parma, Italy",
    startDate: new Date(2018, 9),
    endDate: new Date(2019, 2),
    summary: "Design and development of native Android applications connected to custom ERP.",
    type: "Stage",
    companyLogoSrc: "./assets/esaedro.jpg",
  },
];

const Experiences = () => {
  return (
    <Section>
      <p className="md:text-3xl text-2xl font-bold uppercase italic">Work experiences</p>
      <p className="md:text-lg text-base text-gray-400 uppercase font-bold italic">What I do for living</p>
      <div className="flex flex-col mt-6 md:gap-4 gap-2">
        {items.map((it) => (
          <JobCard key={it.companyName} item={it} />
        ))}
      </div>
    </Section>
  );
};

export { Experiences };

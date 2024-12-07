import { EducationItem } from "./types";

type EducationCardProps = {
  education: EducationItem;
};

const EducationCard = ({ education }: EducationCardProps) => {
  return (
    <div className="flex flex-row">
      <div className="mx-2 border-l-2 border-gray-200 border-opacity-10" />
      <div className="px-5 py-3">
        <p className="md:text-sm text-sm font-semibold text-gray-400">
          {education.startingYear}-{education.endingYear}
        </p>
        <p className="md:text-xl text-2xl font-bold">{education.title}</p>
        <p className="md:text-base text-lg font-semibold text-gray-400">
          {education.type} • {education.place}
        </p>
        {education.details && <p className="mt-2 md:inline-flex hidden">{education.details}</p>}
      </div>
    </div>
  );
};

export { EducationCard };

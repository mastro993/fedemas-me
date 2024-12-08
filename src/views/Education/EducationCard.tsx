import { useMemo } from "react";
import { MdOutlineSchool } from "react-icons/md";
import { EducationItem } from "./types";

type EducationCardProps = {
  education: EducationItem;
  isLast?: boolean;
};

const EducationCard = ({ education, isLast = false }: EducationCardProps) => {
  const { logoUrl } = education;

  const logo = useMemo(() => {
    if (logoUrl) {
      return (
        <div className="w-16 h-16 p-2 flex items-center justify-center bg-white rounded-md">
          <img src={logoUrl} alt="Company logo" />
        </div>
      );
    }
    return (
      <div className="w-16 h-16 p-4 flex items-center justify-center bg-white bg-opacity-10 rounded-md">
        <MdOutlineSchool size={"auto"} className="text-gray-400" />
      </div>
    );
  }, [logoUrl]);

  return (
    <div className="flex flex-row gap-6">
      {/* Education logo */}
      <div className="flex flex-col items-center">
        {logo}
        {!isLast && <div className="h-20 border-l-2 border-white border-opacity-10" />}
      </div>
      {/* Education details */}
      <div>
        <p className="md:text-sm text-sm font-semibold text-gray-400">
          {education.startingYear}-{education.endingYear}
        </p>
        <p className="md:text-xl text-2xl font-bold">{education.title}</p>
        <p className="md:text-base text-lg font-semibold text-gray-400">
          {education.type} • {education.institute}
        </p>
        {education.details && <p className="mt-2 md:inline-flex hidden">{education.details}</p>}
      </div>
    </div>
  );
};

export { EducationCard };

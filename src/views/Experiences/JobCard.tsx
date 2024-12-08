import moment from "moment";
import { WorkExperienceItem, WorkExperienceType } from "./types";

type WorkExperienceCardProps = {
  experience: WorkExperienceItem;
  isLast: boolean;
};

const roleTypeToString: { [type in WorkExperienceType]: string } = {
  "full-time": "Full-time",
  internship: "Internship",
};

const WorkExperienceCard = ({ experience, isLast }: WorkExperienceCardProps) => {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-row gap-6">
        {/* Company logo */}
        <div className="flex flex-col items-center">
          <img className="md:h-16 h-14 p-1 bg-white rounded-md" src={experience.companyLogoSrc} alt="Company logo" />
          {!isLast && <div className="h-20 border-l-2 border-white border-opacity-10" />}
        </div>
        {/* Details */}
        <div className="mb-5">
          <div className="flex flex-col">
            {experience.roles.map(({ startDate, endDate, type, summary, role }) => (
              <>
                <h1 className="text-xl font-bold">{role}</h1>
                <h3 className="text-md font-semibold text-white text-opacity-60 flex items-center ">
                  {experience.companyName} • {roleTypeToString[type]}
                </h3>
                <h5 className="text-sm text-white text-opacity-60 mt-1">
                  {moment(startDate).format("M/yyyy")} - {endDate ? moment(endDate).format("M/yyyy") : "Current"}
                </h5>
                {summary && <p className="md:inline-flex hidden mt-2">{summary}</p>}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { WorkExperienceCard };

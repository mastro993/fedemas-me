import moment from "moment";
import { WorkExperienceItem } from "./types";

type WorkExperienceCardProps = {
  experience: WorkExperienceItem;
};

const WorkExperienceCard = ({ experience }: WorkExperienceCardProps) => {
  return (
    <div className="overflow-hidden ">
      <div className="flex flex-row gap-4">
        <div className="py-2 px-3">
          <img className="rounded-xl md:h-20 h-14" src={experience.companyLogoSrc} alt="Company logo" />
        </div>
        <div className="border-l-2 border-gray-200 border-opacity-10" />
        <div className="py-2 px-3 mb-5">
          <div className="flex flex-col">
            {experience.roles.map(({ startDate, endDate, type, summary, role }) => (
              <>
                <p className="text-sm font-semibold text-gray-400">
                  {moment(startDate).format("M/yyyy")} - {endDate ? moment(endDate).format("M/yyyy") : "Current"}
                </p>
                <p className="text-2xl font-bold">{role}</p>
                <p className="flex items-center text-lg font-semibold text-gray-400">
                  {experience.companyName} • {type}
                </p>
                {summary && <p className="md:inline-flex hidden pt-2">{summary}</p>}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { WorkExperienceCard };

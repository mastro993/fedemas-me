import moment from "moment";
import { JobItem } from "./types";

type JobCardProps = {
  item: JobItem;
};

const JobCard = ({ item }: JobCardProps) => {
  return (
    <div className=" overflow-hidden bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm border-l-2 border-blue-400 ">
      <div className="flex flex-row gap-5 p-5">
        <img className="rounded-xl md:h-20 h-14" src={item.companyLogoSrc} alt="Company logo" />
        <div className="border-l-2 border-gray-200 border-opacity-10" />
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-gray-400">
            {moment(item.startDate).format("M/yyyy")} -{" "}
            {item.endDate ? moment(item.endDate).format("M/yyyy") : "Current"}
          </p>
          <p className="text-2xl font-bold">{item.role}</p>
          <p className="flex items-center text-lg font-semibold text-gray-400">
            {item.companyName} • {item.type}
          </p>
          {item.summary && <p className="md:inline-flex hidden pt-2">{item.summary}</p>}
        </div>
      </div>
    </div>
  );
};

export { JobCard };

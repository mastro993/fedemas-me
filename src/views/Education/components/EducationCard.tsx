import React from "react";
import { EducationItem } from "../types";

interface EducationCardProps {
  item: EducationItem;
}

const EducationCard: React.FC<EducationCardProps> = ({ item }) => {
  return (
    <div className="bg-white bg-opacity-5 overflow-hidden backdrop-filter backdrop-blur-sm border-l-2 border-red-400">
      <div className="p-5">
        <p className="md:text-sm text-sm font-semibold text-gray-400">
          {item.startingYear}-{item.endingYear}
        </p>
        <p className="md:text-xl text-2xl font-bold">{item.title}</p>
        <p className="md:text-base text-lg font-semibold text-gray-400">
          {item.type} • {item.place}
        </p>
        {item.details && <p className="mt-2 md:inline-flex hidden">{item.details}</p>}
      </div>
    </div>
  );
};

export default EducationCard;

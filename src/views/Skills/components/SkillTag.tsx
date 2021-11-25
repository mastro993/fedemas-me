import React from "react";
import { SkillItem } from "../types";

interface SkillTagProps {
  item: SkillItem,
  color: string
}

const SkillTag: React.FC<SkillTagProps> = ({ item }) => {
  return (
    <div className={`flex justify-center items-center gap-3 bg-white rounded-xl bg-opacity-5 px-4 py-2 md:text-base text-sm`}>
      <item.icon />
      {item.label}
    </div>
  );
};

export default SkillTag;
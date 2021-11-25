import React from "react";
import styled from "styled-components";
import { SkillItemGroup } from "../types";
import SkillTag from "./SkillTag";

interface SkillGroupProps {
  group: SkillItemGroup;
}

const SkillSectionLabel = styled.p`
  text-orientation: mixed;
  writing-mode: vertical-rl;
`;

const SkillGroup: React.FC<SkillGroupProps> = ({ group }) => {
  return (
    <div
      className={`flex flex-row bg-white bg-opacity-5 border-l-2 border-${group.color} md:p-4 p-3`}>
      <SkillSectionLabel className="font-bold md:text-base text-sm italic text-gray-400 uppercase flex justify-center">{group.label}</SkillSectionLabel>

      <div className="flex md:gap-4 gap-2 flex-wrap md:pl-4 pl-3 items-start justify-start">
        {group.items.map((i) => <SkillTag item={i} color={group.color} />)}
      </div>

    </div>
  );
};

export default SkillGroup;
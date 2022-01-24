import React from "react";
import {
  SiAndroid,
  SiCplusplus,
  SiDart,
  SiFlutter,
  SiGit,
  SiGo,
  SiIos,
  SiJavascript,
  SiKotlin,
  SiNextdotjs,
  SiPython,
  SiQt,
  SiReact,
  SiSolidity,
  SiSwift,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiWeb3Dotjs,
} from "react-icons/si";
import { Section } from "../../components/Section";
import SkillGroup from "./components/SkillGroup";
import { SkillItemGroup } from "./types";

const Skills: React.FC = () => {
  const web: SkillItemGroup = {
    label: "web",
    color: "green-400",
    items: [
      { icon: SiReact, label: "React" },
      { icon: SiVuedotjs, label: "VueJS" },
      { icon: SiNextdotjs, label: "NextJS" },

      { icon: SiTypescript, label: "Typescript" },
      { icon: SiJavascript, label: "Javascript" },
    ],
  };

  const mobile: SkillItemGroup = {
    label: "mobile",
    color: "blue-400",
    items: [
      { icon: SiFlutter, label: "Flutter" },
      { icon: SiAndroid, label: "Android" },
      { icon: SiIos, label: "iOS" },
      { icon: SiDart, label: "Dart" },
      { icon: SiSwift, label: "Swift" },
      { icon: SiKotlin, label: "Kotlin" },
    ],
  };

  const other: SkillItemGroup = {
    label: "other",
    color: "purple-400",
    items: [
      { icon: SiCplusplus, label: "C/C++" },
      { icon: SiQt, label: "Qt" },
      { icon: SiSolidity, label: "Solidity" },
      { icon: SiGit, label: "Git" },
      { icon: SiGo, label: "Go" },
      { icon: SiThreedotjs, label: "ThreeJS" },
      { icon: SiWeb3Dotjs, label: "Web3" },
      { icon: SiPython, label: "Python" },
    ],
  };

  return (
    <Section>
      <p className="md:text-3xl text-2xl font-bold uppercase font-bold italic">Skills</p>
      <p className="md:text-lg text-base  text-gray-400 uppercase font-bold italic">
        Programming languages, frameworks and technologies
      </p>

      <div className="flex flex-col md:gap-4 gap-2 mt-6">
        <SkillGroup group={web} />
        <SkillGroup group={mobile} />
        <SkillGroup group={other} />
      </div>
    </Section>
  );
};

export default Skills;

import React from "react";
import { Section } from "../../components/Section";
import WavingHand from "./components/WavingHand";

const Introduction: React.FC = () => {
  return (
    <Section>
      <p className="md:text-6xl text-4xl font-extrabold py-6 uppercase italic">
        Hey there <WavingHand />
      </p>
      <p className="lg:text-2xl md:text-xl text-base text-gray-200 italic">
        I'm Federico.
        <br />
        I'm a Software Engineer whit a passion in Mobile and Web development based in La Spezia, Italy.
        <br />
        I enjoy solving problems using UI and UX as fundation, and have lots of fun doing it!
        <br />
        Scroll down to see more about me 👇🏻
        <br />
      </p>
    </Section>
  );
};

export default Introduction;

import { Projects } from "views/Projects";
import { Contacts } from "../Contacts";
import { Education } from "../Education";
import { Experiences } from "../Experiences";
import { Introduction } from "../Introduction";
import { PepeBand } from "./PepeBand";

const Home: React.FC = () => {
  return (
    <>
      <Introduction />
      <Projects />
      <Experiences />
      <Education />
      <Contacts />
      <PepeBand />
    </>
  );
};

export default Home;

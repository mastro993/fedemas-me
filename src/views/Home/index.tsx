import { Projects } from "views/Projects";
import { Contacts } from "../Contacts";
import { Experiences } from "../Experiences";
import { Introduction } from "../Introduction";
import { PepeBand } from "./PepeBand";

const Home: React.FC = () => {
  return (
    <>
      <Introduction />
      <Projects />
      <Experiences />
      <Contacts />
      <PepeBand />
    </>
  );
};

export default Home;

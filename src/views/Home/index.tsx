import Projects from "views/Projects";
import Contacts from "../Contacts";
import Education from "../Education";
import Experiences from "../Experiences";
import Introduction from "../Introduction";
import Skills from "../Skills";
import PepeBand from "./components/PepeBand";

const Home: React.FC = () => {
  return (
    <>
      <Introduction />
      <Projects />
      <Experiences />
      <Skills />
      <Education />
      <Contacts />
      <PepeBand />
    </>
  );
};

export default Home;

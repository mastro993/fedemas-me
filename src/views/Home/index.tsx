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
      {/*<Projects />*/}
      <Skills />
      <Experiences />
      <Education />
      <Contacts />
      <PepeBand />
    </>
  );
};

export default Home;

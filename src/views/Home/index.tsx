import Introduction from "../Introduction";
import Projects from "../Projects";
import Skills from "../Skills";
import Experiences from "../Experiences";
import Education from "../Education";
import Contacts from "../Contacts";
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
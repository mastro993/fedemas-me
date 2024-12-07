import { lazy, Suspense } from "react";
import { Header } from "./components/Header";
import { PageLoader } from "./components/PageLoader";
import { ParticlesContainer } from "./components/ParticlesContainer";
import "./theme/style.css";

const Home = lazy(() => import("./views/Home"));

function App() {
  return (
    <>
      <ParticlesContainer />
      <Suspense fallback={<PageLoader />}>
        <Header />
        <Home />
      </Suspense>
    </>
  );
}

export default App;

import { lazy, Suspense } from "react";
import { Header } from "./components/Header";
import { PageLoader } from "./components/PageLoader";
import { ParticlesContainer } from "./components/ParticlesContainer";
import { GlobalStyle } from "./theme";

const Home = lazy(() => import("./views/Home"));

function App() {
  return (
    <>
      <GlobalStyle />
      <ParticlesContainer />
      <Suspense fallback={<PageLoader />}>
        <Header />
        <Home />
      </Suspense>
    </>
  );
}

export default App;

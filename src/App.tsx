import React, { lazy, Suspense } from "react";
import GlobalStyle from "./theme/GlobalStyle";
import PageLoader from "./components/PageLoader";
import { Navigation } from "./components/Navigation";
import { ParticlesContainer } from "./components/ParticlesContainer";

const Home = lazy(() => import("./views/Home"));

function App() {
  return (
    <ParticlesContainer>
      <Suspense fallback={<PageLoader />}>
        <GlobalStyle />
        <Navigation />
        <Home />
      </Suspense>
    </ParticlesContainer>
  );
}

export default App;

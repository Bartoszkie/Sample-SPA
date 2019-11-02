import React from "react";

//STYLES
import "../src/sass/main.scss";
import { AppContainer } from "../src/sass/base/components-styles/app.styles";
import ParticlesComponent from "./components/particles/particles.component";

//COMPONENTS
import Header from "./components/header/header.component";
import MovieResults from "./components/movie-results/movie-results.component";
import Footer from "./components/footer/footer.component";

const App = () => {
  return (
    <AppContainer>
      <ParticlesComponent />
      <Header />
      <MovieResults />
      <Footer />
    </AppContainer>
  );
};

export default App;

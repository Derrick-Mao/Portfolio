import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Education,
  Experience,
  Hero,
  Navbar,
  Projects,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Education />
        <About />
        <Experience />
        <Projects />
        <div className="flex justify-center">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

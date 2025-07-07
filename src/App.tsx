import Navbar from "./components/Navbar";

import Setting from "./components/setting/Setting";
import About from "./sections/About";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ProjectV2 from "./sections/ProjectV2";
import SkillsV2 from "./sections/SkillsV2";

function App() {
  return (
    <>
      <Navbar />
      <Setting />

      <main>
        <Hero />
        <About />
        <Experience />
        <Certifications />
        <Education />
        <ProjectV2 />
        <SkillsV2 />
        <Contact />
      </main>
    </>
  );
}

export default App;

import ColorMode from "./components/ColorMode";
import LanguageChange from "./components/LanguageChange";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  return (
    <>
      <Navbar />
      <div className="h-fit flex items-center justify-start gap-4 fixed bottom-5 lg:top-5 lg:right-10 right-5">
        <LanguageChange />
        <ColorMode />
      </div>
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;

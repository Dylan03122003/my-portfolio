import ColorMode from "./components/ColorMode";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Hero from "./sections/Hero";
// import Projects from "./sections/Projects";
// import Skills from "./sections/Skills";

function App() {
  return (
    <>
      <ColorMode />
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* <Projects />
        <Skills /> */}
      </main>
    </>
  );
}

export default App;

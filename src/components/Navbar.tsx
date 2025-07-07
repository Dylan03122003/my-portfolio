import { useCallback, useEffect, useRef, useState } from "react";
import { SECTION_ID } from "../utils/section_ids";
import Scroller from "./Scroller";

const Navbar = () => {
  const [currentSection, setCurrentSection] = useState<string>(SECTION_ID.HOME);
  const [scrollDirection, setScrollDirection] = useState<
    "up" | "down" | "initial"
  >("initial");
  const prevScrollY = useRef<number>(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > prevScrollY.current) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }

    prevScrollY.current = currentScrollY;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // Adjust the offset as needed
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setCurrentSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed z-30 top-0 xl:top-5 left-[50%] -translate-x-[50%] w-full xl:w-[1000px] bg-card-light-mode dark:bg-card-dark-mode rounded-none xl:rounded-full shadow-custom transition-opacity delay-200 ${
        scrollDirection === "down" ? "opacity-0" : "opacity-100"
      }`}
    >
      <ul className=" flex items-center justify-center flex-wrap xl:flex-nowrap py-4 px-8 gap-2 xl:gap-10 font-medium text-[#5e5c7f] dark:text-[#CBD5E1] ">
        <Scroller
          isActive={currentSection === SECTION_ID.HOME}
          linkText="Home"
          sectionName={SECTION_ID.HOME}
        />
        <Scroller
          isActive={currentSection === SECTION_ID.ABOUT}
          linkText="About"
          sectionName={SECTION_ID.ABOUT}
        />
        <Scroller
          isActive={currentSection === SECTION_ID.EXPERIENCE}
          linkText="Experience"
          sectionName={SECTION_ID.EXPERIENCE}
        />
        <Scroller
          isActive={currentSection === SECTION_ID.CERTIFICATIONS}
          linkText="Certifications"
          sectionName={SECTION_ID.CERTIFICATIONS}
        />
        <Scroller
          isActive={currentSection === SECTION_ID.EDUCATION}
          linkText="Education"
          sectionName={SECTION_ID.EDUCATION}
        />
        <Scroller
          isActive={currentSection === SECTION_ID.PROJECTS}
          linkText="Projects"
          sectionName={SECTION_ID.PROJECTS}
        />
        <Scroller
          isActive={currentSection === SECTION_ID.SKILLS}
          linkText="Skills"
          sectionName={SECTION_ID.SKILLS}
        />
        <Scroller
          isActive={currentSection === SECTION_ID.CONTACT}
          linkText="Contact"
          sectionName={SECTION_ID.CONTACT}
        />
      </ul>
    </nav>
  );
};

export default Navbar;

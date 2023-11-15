import { useCallback, useEffect, useRef, useState } from "react";
import { useAppContext } from "../hooks/useAppContext";
import { SECTION_ID } from "../utils/section_ids";

const Navbar = () => {
  const { getText } = useAppContext();
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
      className={`fixed z-30 top-0 sm:top-5 left-[50%] -translate-x-[50%] w-full sm:w-[500px] bg-card-light-mode dark:bg-card-dark-mode rounded-none sm:rounded-full shadow-custom ${
        scrollDirection === "down" ? "hidden" : "block"
      }`}
    >
      <ul className=" flex items-center justify-center flex-wrap sm:flex-nowrap py-4 px-8 gap-2 sm:gap-10 font-medium text-[#5e5c7f] dark:text-[#CBD5E1] ">
        <li
          className={`${
            currentSection === SECTION_ID.HOME &&
            "bg-slate-100 dark:bg-slate-600"
          } rounded-full px-3 py-1`}
        >
          <a href={`#${SECTION_ID.HOME}`}>{getText("Home")}</a>
        </li>
        <li
          className={`${
            currentSection === SECTION_ID.ABOUT &&
            "bg-slate-100 dark:bg-slate-600"
          } rounded-full px-3 py-1`}
        >
          <a href={`#${SECTION_ID.ABOUT}`}>{getText("About me")}</a>
        </li>
        <li
          className={`${
            currentSection === SECTION_ID.PROJECTS &&
            "bg-slate-100 dark:bg-slate-600"
          } rounded-full px-3 py-1`}
        >
          <a href={`#${SECTION_ID.PROJECTS}`}>{getText("Projects")}</a>
        </li>
        <li
          className={`${
            currentSection === SECTION_ID.SKILLS &&
            "bg-slate-100 dark:bg-slate-600"
          } rounded-full px-3 py-1`}
        >
          <a href={`#${SECTION_ID.SKILLS}`}>{getText("Skills")}</a>
        </li>
        {/* <li
          className={`${
            currentSection === SECTION_ID.CONTACT &&
            "bg-slate-100 dark:bg-slate-600"
          } rounded-full px-3 py-1`}
        >
          <a href={`#${SECTION_ID.CONTACT}`}>Contact</a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;

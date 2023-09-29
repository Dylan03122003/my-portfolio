import { useEffect, useState } from "react";
import { SECTION_ID } from "../utils/section_ids";

const Navbar = () => {
  const [currentSection, setCurrentSection] = useState<string>(SECTION_ID.HOME);

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
    <nav className="fixed z-10 top-0 sm:top-5 left-[50%] -translate-x-[50%] w-full sm:w-fit bg-card-light-mode dark:bg-card-dark-mode rounded-none sm:rounded-full  shadow-custom">
      <ul className=" flex items-center justify-center flex-wrap sm:flex-nowrap py-4 px-8 gap-2 sm:gap-10 font-medium text-[#5e5c7f] dark:text-[#CBD5E1] ">
        <li
          className={`${
            currentSection === SECTION_ID.HOME &&
            "bg-slate-100 dark:bg-slate-600"
          } rounded-full px-3 py-1`}
        >
          <a href={`#${SECTION_ID.HOME}`}>Home</a>
        </li>
        <li
          className={`${
            currentSection === SECTION_ID.ABOUT &&
            "bg-slate-100 dark:bg-slate-600"
          } rounded-full px-3 py-1`}
        >
          <a href={`#${SECTION_ID.ABOUT}`}>About</a>
        </li>
        <li
          className={`${
            currentSection === SECTION_ID.PROJECTS &&
            "bg-slate-100 dark:bg-slate-600"
          } rounded-full px-3 py-1`}
        >
          <a href={`#${SECTION_ID.PROJECTS}`}>Projects</a>
        </li>
        <li
          className={`${
            currentSection === SECTION_ID.SKILLS &&
            "bg-slate-100 dark:bg-slate-600"
          } rounded-full px-3 py-1`}
        >
          <a href={`#${SECTION_ID.SKILLS}`}>Skills</a>
        </li>
        <li
          className={`${
            currentSection === SECTION_ID.CONTACT &&
            "bg-slate-100 dark:bg-slate-600"
          } rounded-full px-3 py-1`}
        >
          <a href={`#${SECTION_ID.CONTACT}`}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BiDetail } from "react-icons/bi";
import { BsEye, BsGithub, BsYoutube } from "react-icons/bs";

import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { Project, TAB } from "../data/projects";
import { useAppContext } from "../hooks/useAppContext";
import Modal from "./Modal";
import ProjectDetail from "./ProjectDetail";
interface Props {
  project: Project;
  currentTab: TAB;
}

const ProjectItem = ({ project, currentTab }: Props) => {
  const { getText } = useAppContext();
  const tagContainer = useRef<HTMLDivElement | null>(null);
  const [isOverflowing, setIsOverflowing] = useState<boolean>(false);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [open, setOpen] = useState(false);
  // const [openProjectDetail, setOpenProjectDetail] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleScroll = (scrollOffset: number) => {
    if (tagContainer.current) {
      const container = tagContainer.current;
      const currentScrollLeft = container.scrollLeft;
      const targetScrollLeft = currentScrollLeft + scrollOffset;

      const isAtEnd =
        targetScrollLeft >= container.scrollWidth - container.clientWidth;
      setIsAtEnd(isAtEnd);

      container.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (tagContainer.current) {
      setIsOverflowing(
        tagContainer.current.scrollWidth > tagContainer.current.clientWidth
      );
    }
  }, [currentTab]);

  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        {open && (
          <Modal
            className=" w-[320px] sm:w-[600px] md:w-[750px] lg:w-[1000px]  bg-card-light-mode dark:bg-card-dark-mode shadow-custom"
            onClose={() => setOpen(false)}
          >
            <div className="flex flex-col sm:flex-row justify-between items-center p-4  gap-4 border-b-[1px] border-solid border-gray-500 dark:border-gray-400">
              <h2 className="font-medium text-2xl text-title-light-mode dark:text-text-dark-mode">
                Video demo
              </h2>
              <p className="font-medium text-xl text-red-400">
                I'll update video demo soon
              </p>
              <a
                className="text-xl text-blue-600 dark:text-blue-400"
                href="https://youtu.be/pnP3UQQLiaw?si=Pa4lccEnXyL5I0MI"
                target="_blank"
              >
                View on Youtube
              </a>
            </div>
            <iframe
              className="w-full h-[320px] sm:h-[355px] md:h-[555px] lg:h-[700px] mb-4 p-4"
              // width="560"
              // height="315"
              src="https://www.youtube.com/embed/pnP3UQQLiaw?si=Gy00pS8C3bch1N6Q"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div className="flex flex-col items-end justify-center p-4">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-1 rounded-md font-medium bg-gray-200 dark:bg-gray-100 text-gray-600"
              >
                Close
              </button>
            </div>
          </Modal>
        )}

        {selectedProject && (
          <Modal
            className="w-[90%] md:w-[80%] xl:w-[1200px] h-[800px] bg-card-light-mode dark:bg-card-dark-mode shadow-custom overflow-y-scroll"
            onClose={() => setSelectedProject(null)}
          >
            <ProjectDetail
              project={project}
              onClose={() => setSelectedProject(null)}
            />
          </Modal>
        )}
      </AnimatePresence>
      <div className="w-[310px] lg:w-[450px] flex flex-col p-4 shadow-custom rounded-md bg-[#F8FAFC] dark:bg-card-dark-mode">
        <h2 className="flex-grow font-medium text-2xl text-center mb-4 text-title-light-mode dark:text-text-dark-mode">
          {getText(project.title)}
        </h2>

        <h3 className=" mx-auto w-fit mb-4 italic border-b-[1px] border-solid border-gray-400 dark:border-white   text-text-light-mode dark:text-text-dark-mode">
          {project.role}
        </h3>

        <img
          className="w-full rounded-md mb-4 shadow-custom"
          src={project.image}
          alt={`${project.title}_image`}
        />

        <div className="flex items-center justify-start gap-2 mb-10">
          <div
            ref={tagContainer}
            id="tag_container"
            className="flex items-center justify-start gap-2 overflow-x-scroll w-full scrollbar_none"
          >
            {project.technologies.map((t) => (
              <div
                className="px-4 py-1 font-medium bg-[#E4F1FF] dark:bg-[#2E4374] text-blue-500 dark:text-text-dark-mode rounded-full"
                key={t}
              >
                {t}
              </div>
            ))}
          </div>
          {isOverflowing && (
            <button
              className=""
              onClick={() => handleScroll(isAtEnd ? -1000 : 120)}
            >
              {isAtEnd ? (
                <MdKeyboardDoubleArrowLeft className="text-gray-500 w-8 h-8" />
              ) : (
                <MdKeyboardDoubleArrowRight className="text-gray-500 w-8 h-8" />
              )}
            </button>
          )}
        </div>
        <div className="flex justify-center items-center gap-4">
          {project.githubLink && (
            <a
              href={`${project.githubLink}`}
              className="relative"
              target="_blank"
            >
              <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] h-[35px] w-[35px] bg-white rounded-full"></div>
              <BsGithub className="w-9 h-9 relative z-10 " />
            </a>
          )}
          {project.websiteLink && (
            <a href={`${project.websiteLink}`} className="" target="_blank">
              <BsEye className="text-text-light-mode dark:text-text-dark-mode w-10 h-10" />
            </a>
          )}
          {project.youtubeLink && (
            <a
              // href={`${project.youtubeLink}`}
              className="relative cursor-pointer"
              target="_blank"
              onClick={() => setOpen(true)}
            >
              <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] h-5 w-5 bg-white"></div>
              <BsYoutube className="text-[#FF0000] relative z-10 w-10 h-10" />
            </a>
          )}
          <button onClick={() => setSelectedProject(project)}>
            <BiDetail className="w-10 h-10 text-slate-500 dark:text-slate-300" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;

import { useEffect, useRef, useState } from "react";
import { BsEye, BsGithub, BsYoutube } from "react-icons/bs";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { Project } from "../data/projects";
interface Props {
  project: Project;
}

const ProjectItem = ({ project }: Props) => {
  const tagContainer = useRef<HTMLDivElement | null>(null);
  const [isOverflowing, setIsOverflowing] = useState<boolean>(false);
  const [isAtEnd, setIsAtEnd] = useState(false);

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
  }, []);

  return (
    <div className="w-[340px] md:w-[450px]  flex flex-col p-4 shadow-custom rounded-md bg-[#F8FAFC] dark:bg-card-dark-mode">
      <h2 className="font-medium text-2xl text-center mb-4 text-title-light-mode dark:text-text-dark-mode">
        {project.title}
      </h2>

      <h3 className="mx-auto  w-fit mb-4 italic border-b-[1px] border-solid border-gray-400 dark:border-white   text-text-light-mode dark:text-text-dark-mode">
        {project.role}
      </h3>

      <img
        className="w-full rounded-md mb-4"
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
            <p
              className="px-4 py-1 font-medium bg-[#E4F1FF] dark:bg-[#2E4374] text-title-light-mode dark:text-text-dark-mode rounded-full"
              key={t}
            >
              {t}
            </p>
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
        <a href={`${project.githubLink}`} className="relative">
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] h-[35px] w-[35px] bg-white rounded-full"></div>
          <BsGithub className="w-9 h-9 relative z-10 " />
        </a>
        <a href={`${project.githubLink}`} className="">
          <BsEye className="text-text-light-mode dark:text-text-dark-mode w-10 h-10" />
        </a>
        <a href={`${project.githubLink}`} className="relative">
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] h-5 w-5 bg-white"></div>
          <BsYoutube className="text-[#FF0000] relative z-10 w-10 h-10" />
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;

import { Project } from "../data/projects";
import { useAppContext } from "../hooks/useAppContext";

interface Props {
  project: Project;
  onClose: () => void;
}

const ProjectDetail = ({ project, onClose }: Props) => {
  const { getText } = useAppContext();

  return (
    <div className="">
      <div className=" p-4 h-[250px] custom_scrollbar flex items-center justify-start gap-2 overflow-x-scroll bg-primary-light-mode dark:bg-card-dark-mode">
        {project.images.map((img, index) => (
          <img key={index} className="h-full w-full object-contain" src={img} />
        ))}
      </div>

      <div className="flex md:flex-row flex-col gap-10 p-4 ">
        <div className="flex-[0.4]">
          <h2 className="mt-5 flex-grow font-medium text-2xl text-center mb-4 text-title-light-mode dark:text-text-dark-mode">
            {getText(project.title)}
          </h2>

          <h3 className=" mx-auto w-fit mb-4 italic border-b-[1px] border-solid border-gray-400 dark:border-white   text-text-light-mode dark:text-text-dark-mode">
            {project.role}
          </h3>

          <div className="flex items-center justify-center flex-wrap gap-2  w-full ">
            {project.technologies.map((t) => (
              <div
                className="px-4 py-1 font-medium bg-[#E4F1FF] dark:bg-[#2E4374] text-blue-500 dark:text-text-dark-mode rounded-full"
                key={t}
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-[0.6] p-4 md:p-0">
          <h2 className="mt-5 flex-grow font-medium text-2xl text-center mb-4 text-title-light-mode dark:text-text-dark-mode">
            Description
          </h2>

          <ul className="list-disc text-text-light-mode dark:text-text-dark-mode space-y-3">
            {project.description.map((d, index) => (
              <li key={index}>{d}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="sm:hidden flex items-center justify-end p-2">
        <button
          onClick={onClose}
          className=" px-4 py-1 rounded-md font-medium bg-gray-200 dark:bg-gray-100 text-gray-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectDetail;

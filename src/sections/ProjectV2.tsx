import { useState, useEffect } from "react";

// Technology icons using lucide-react
import { Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { GoXCircle } from "react-icons/go";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";

import { Project } from "../types/protect.types";
import { projects } from "../data/projects";
import { technologyIconMap } from "../data/technologyIconMap";
import BackgroundPattern from "../components/BackgroundPattern";
import SectionHeader from "../components/SectionHeader";

// 1. Define your props interface
interface TechIconProps {
  tech: string;
}

// 2. Annotate the component with React.FC and destructure with the correct type
const TechIcon: React.FC<TechIconProps> = ({ tech }) => {
  return (
    <div className="flex items-center gap-1 bg-white/80 dark:bg-slate-800/90 backdrop-blur-sm border border-blue-100 dark:border-slate-600/50 text-gray-800 dark:text-slate-100 px-3 py-1 rounded-full text-sm shadow-sm transition-all hover:shadow-md hover:bg-blue-50 dark:hover:bg-slate-700/80 dark:hover:border-slate-500/60">
      <span className="text-blue-600 dark:text-blue-400">
        {technologyIconMap[tech] || <FaCode />}
      </span>
      <span className="font-medium">{tech}</span>
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
  index: number;
}

// Project card component
const ProjectCard = ({ project, onViewDetails, index }: ProjectCardProps) => {
  // Animation delay based on index for staggered entrance
  const animationDelay = `${index * 0.1}s`;

  return (
    <div
      className="group bg-white dark:bg-gray-800/80 rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
      style={{
        animationName: "fadeInUp",
        animationDuration: "0.6s",
        animationFillMode: "both",
        animationDelay: animationDelay,
      }}
    >
      {/* Main image with gradient overlay */}
      <div className="h-64 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <img
          src={project.mainImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Project links */}
        <div className="absolute top-4 right-4 flex gap-2 z-20">
          {project.websiteLink && (
            <a
              href={project.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 p-2 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition-colors"
            >
              <FiExternalLink size={18} />
            </a>
          )}

          {project.repoLink && (
            <a
              href={project.repoLink.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 p-2 rounded-full shadow-md hover:bg-gray-800 hover:text-white transition-colors"
            >
              <FaGithub size={18} />
            </a>
          )}

          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 p-2 rounded-full shadow-md hover:bg-red-500 hover:text-white transition-colors"
            >
              <FaYoutube size={18} />
            </a>
          )}
        </div>

        {/* Project title on image */}
        <div className="absolute bottom-0 left-0 w-full p-6 z-20">
          <h3 className="text-2xl font-bold text-white mb-1">
            {project.title}
          </h3>

          {/* Roles directly on the image */}
          <div className="flex flex-wrap gap-2 mb-2">
            {project.roles.map((role, index) => (
              <span
                key={index}
                className="bg-blue-600/80 backdrop-blur-sm text-white px-3 py-1 rounded-md text-xs font-medium"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Description */}
        <p className="text-gray-600 dark:text-gray-100 mb-6">
          {project.briefDescription}
        </p>

        {/* Technologies preview - limit to 5 */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((tech, index) => (
              <TechIcon key={index} tech={tech} />
            ))}
            {project.technologies.length > 5 && (
              <span className="bg-white/80 dark:bg-slate-800/90 backdrop-blur-sm border border-blue-100 dark:border-slate-600/50 text-gray-800 dark:text-slate-100 px-3 py-1 rounded-full text-sm font-medium shadow-sm transition-all hover:bg-blue-50 dark:hover:bg-slate-700/80 dark:hover:border-slate-500/60">
                +{project.technologies.length - 5} more
              </span>
            )}
          </div>
        </div>

        {/* View details button */}
        <button
          onClick={() => onViewDetails(project)}
          className=" w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 font-semibold group"
        >
          <span>View Project Details</span>
          <FaArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </div>
    </div>
  );
};

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

// Project modal component
const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const projectImages = project.images;

  useEffect(() => {
    // Fade in animation
    setIsVisible(true);

    // Add event listener for escape key
    const handleEscape = (e: { key: string }) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);

    // Clean up
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Wait for animation to complete
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setActiveImageIndex(
      (prev) => (prev - 1 + projectImages.length) % projectImages.length
    );
  };

  return (
    <div
      className={`fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`bg-white dark:bg-slate-900 rounded-2xl overflow-hidden max-w-[52rem] w-full max-h-[90vh] flex flex-col transform transition-all duration-300 ${
          isVisible ? "scale-100" : "scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-slate-700 flex justify-between items-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700">
          <div className="flex items-center gap-3">
            <FaRegStar
              className="text-yellow-500 dark:text-yellow-400"
              size={24}
            />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100">
              {project.title}
            </h2>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200 transition-colors"
          >
            <GoXCircle size={28} />
          </button>
        </div>

        <div className="overflow-y-auto flex-grow custom-scrollbar">
          {/* Image gallery */}
          <div className="relative h-96 ">
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
            <img
              src={projectImages[activeImageIndex]}
              alt={`${project.title} screenshot ${activeImageIndex + 1}`}
              className="w-full h-full object-contain"
            />

            {/* Image navigation */}
            {projectImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-slate-800/90 p-3 rounded-full shadow-md opacity-80 hover:opacity-100 z-20 transition-all hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500"
                >
                  <FaChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-slate-800/90 p-3 rounded-full shadow-md opacity-80 hover:opacity-100 z-20 transition-all hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500"
                >
                  <FaChevronRight size={20} />
                </button>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                  {projectImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === activeImageIndex
                          ? "bg-blue-600 dark:bg-blue-500 scale-125"
                          : "bg-white dark:bg-slate-300"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Content with modern styling */}
          <div className="p-8">
            {/* Description */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white">
                  <Sparkles size={20} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100">
                  About the Project
                </h3>
              </div>
              <p className="text-gray-700 dark:text-slate-300 text-lg leading-relaxed">
                {project.briefDescription}
              </p>
            </div>

            {/* Links */}
            <div className="mb-8 flex flex-wrap gap-4">
              {project.websiteLink && (
                <a
                  href={project.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-lg transition-colors"
                >
                  <FiExternalLink size={18} />
                  <span className="font-medium">Visit Website</span>
                </a>
              )}

              {project.repoLink && (
                <a
                  href={project.repoLink.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-800 dark:text-slate-200 rounded-lg transition-colors"
                >
                  <FaGithub size={18} />
                  <span className="font-medium">View Repository</span>
                </a>
              )}

              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-900/30 hover:bg-red-100 dark:hover:bg-red-900/50 text-red-700 dark:text-red-300 rounded-lg transition-colors"
                >
                  <FaYoutube size={18} />
                  <span className="font-medium">Watch Demo</span>
                </a>
              )}
            </div>

            {/* Roles and Technologies in a card-based layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Roles */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800/50 dark:to-slate-700/50 border border-blue-100 dark:border-slate-600/50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white">
                    <FaRegStar size={16} />
                  </div>
                  My Roles
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.roles.map((role, index) => (
                    <span
                      key={index}
                      className="bg-blue-600/10 dark:bg-blue-500/20 border border-blue-200 dark:border-blue-400/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-lg text-sm font-medium"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-800/50 dark:to-slate-700/50 border border-gray-200 dark:border-slate-600/50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-700 dark:bg-slate-600 flex items-center justify-center text-white">
                    <FaCode size={16} />
                  </div>
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <TechIcon key={index} tech={tech} />
                  ))}
                </div>
              </div>
            </div>

            {/* Highlights with icon bullets */}
            <div className="bg-gradient-to-br from-white to-blue-50 dark:from-slate-800/50 dark:to-slate-700/50 border border-gray-200 dark:border-slate-600/50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-600 dark:bg-green-500 flex items-center justify-center text-white">
                  <Sparkles size={16} />
                </div>
                Key Features & Highlights
              </h3>
              <ul className="space-y-4">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 text-green-600 dark:text-green-400">
                      <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <FaRegStar
                          size={12}
                          className="text-green-600 dark:text-green-400"
                        />
                      </div>
                    </div>
                    <span className="text-gray-700 dark:text-slate-300">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// CSS for animations
const animationStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 30px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
    }
  }
`;

// Main component
export default function ProjectV2() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="min-h-screen relative py-20 px-6">
      <BackgroundPattern />

      {/* Inject animation styles */}
      <style>{animationStyles}</style>

      <div className="max-w-6xl mx-auto">
        {/* Header with animated entrance */}
        <SectionHeader
          mainTitle="Featured Projects"
          subTitle="Portfolio Showcase"
          description="A collection of innovative projects that showcase my skills in
        full-stack development, team leadership, and building scalable
        applications with modern technologies."
          icon={<Sparkles size={16} className="mr-2" />}
        />

        {/* Projects Grid with staggered animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onViewDetails={setSelectedProject}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

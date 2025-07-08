import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import ImageProfile from "../components/ImageProfile";
import { Language } from "../context/appContext";
import { FACEBOOK_LINK, LINKEDIN_LINK } from "../data/social_media";
import { useAppContext } from "../hooks/useAppContext";
import { SECTION_ID } from "../utils/section_ids";
import cv from "./../assets/CV_Cao Đặng Quốc Dương.pdf";
import Profile from "./../assets/profile_cleared.jpg";
import BackgroundPattern from "../components/BackgroundPattern";

const Hero = () => {
  const { getText, state } = useAppContext();

  const renderHeroDescription = () => {
    if (state.currentLanguage === Language.VN) {
      return (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="px-4 text-2xl sm:text-3xl text-center w-fit sm:w-[630px] mt-5 text-title-light-mode dark:text-[#CBD5E1] leading-relaxed"
        >
          <span className="font-bold dark:text-white bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Xin chào, mình là Quốc Dương
          </span>
          , một lập trình viên
          <span className="font-bold dark:text-white"> full-stack </span>
          nhiệt huyết với sự tập trung vào{" "}
          <span className="relative inline-block">
            <span className="underline decoration-wavy decoration-blue-400 underline-offset-4">
              React (Next.js)
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-50"></span>
          </span>
          . Mình phát triển thông qua việc tạo ra những
          <span className="font-bold dark:text-white">
            {" "}
            trang web sáng tạo{" "}
          </span>
          mang ý tưởng vào cuộc sống.
        </motion.h2>
      );
    } else {
      return (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="px-4 text-2xl sm:text-3xl text-center w-fit sm:w-[730px] mt-5 text-title-light-mode dark:text-[#CBD5E1] leading-relaxed"
        >
          <span className="font-bold dark:text-white bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Hello, I'm Quoc Duong
          </span>
          , a passionate
          <span className="font-bold dark:text-white">
            {" "}
            full-stack engineer{" "}
          </span>
          with a focus on{" "}
          <span className="relative inline-block">
            <span className="underline decoration-wavy decoration-blue-400 underline-offset-4">
              React (Next.js)
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-50"></span>
          </span>
          . I specialize in building websites that
          <span className="font-bold dark:text-white">
            {" "}
            not only look great but also meet real customer needs.
          </span>
        </motion.h2>
      );
    }
  };

  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-start relative overflow-hidden"
    >
      {/* Animated background elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-300 dark:bg-blue-800 mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-purple-300 dark:bg-purple-800 mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-float-delay"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-pink-200 dark:bg-pink-900 mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-10 animate-pulse-slow"></div>
      </div> */}
      <BackgroundPattern />

      {/* Content with z-index to appear above the background */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-36 sm:pt-40">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <ImageProfile profileImage={Profile} mt="mt-0" size="small" />
        </motion.div>

        {renderHeroDescription()}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex items-center justify-center flex-col sm:flex-row gap-4"
        >
          <a
            href={`#${SECTION_ID.CONTACT}`}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {getText("Contact me here")}
            <LiaLongArrowAltRightSolid className="animate-bounce-x" />
          </a>

          <a
            href={cv}
            download="CV_Cao Đặng Quốc Dương"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 bg-white dark:bg-gray-800 px-8 py-3 text-gray-800 dark:text-white hover:bg-gray-100 hover:dark:bg-gray-700 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700"
          >
            {getText("Download CV")}
            <HiDownload className="animate-bounce" />
          </a>

          <div className="flex gap-3 mt-3 sm:mt-0">
            <a
              target="_blank"
              href={`${LINKEDIN_LINK}`}
              className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 hover:dark:bg-gray-700 transition-all duration-300 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-110 border border-gray-200 dark:border-gray-700"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href={`${FACEBOOK_LINK}`}
              target="_blank"
              className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 hover:dark:bg-gray-700 transition-all duration-300 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-110 border border-gray-200 dark:border-gray-700"
            >
              <BsFacebook className="text-xl" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      {/* <div className="absolute bottom-10 left-5 w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 dark:opacity-10 blur-lg"></div>
      <div className="absolute top-20 right-10 w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 dark:opacity-10 blur-lg"></div> */}

      {/* Add custom animations to your CSS */}
      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes float-delay {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.2;
            transform: scale(1.05);
          }
        }
        @keyframes bounce-x {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 8s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        .animate-bounce-x {
          animation: bounce-x 1s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;

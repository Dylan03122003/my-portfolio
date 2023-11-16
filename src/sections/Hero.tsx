import { BsFacebook, BsGithub } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import ImageProfile from "../components/ImageProfile";
import { Language } from "../context/appContext";
import { FACEBOOK_LINK, GITHUB_LINK } from "../data/social_media";
import { useAppContext } from "../hooks/useAppContext";
import { SECTION_ID } from "../utils/section_ids";
import cv from "./../assets/CV_Cao Đặng Quốc Dương.pdf";
import Profile from "./../assets/profile_cleared.jpg";

// Xin chào, mình là Quốc Dương, một lập trình viên full-stack nhiệt huyết với sự tập trung vào React (Next.js). Mình phát triển thông qua việc tạo ra những trang web sáng tạo mang ý tưởng vào cuộc sống.

const Hero = () => {
  const { getText, state } = useAppContext();

  const renderHeroDescription = () => {
    if (state.currentLanguage === Language.VN) {
      return (
        <>
          <h2 className="px-4 text-2xl sm:text-3xl text-center w-fit sm:w-[630px] mt-5 text-title-light-mode dark:text-[#CBD5E1] ">
            <span className="font-bold dark:text-white">
              Xin chào, mình là Quốc Dương
            </span>
            , một lập trình viên
            <span className="font-bold dark:text-white"> full-stack </span>
            nhiệt huyết với sự tập trung vào{" "}
            <span className="underline">React (Next.js)</span>. Mình phát triển
            thông qua việc tạo ra những
            <span className="font-bold dark:text-white">
              {" "}
              trang web sáng tạo{" "}
            </span>
            mang ý tưởng vào cuộc sống.
          </h2>
          ;
        </>
      );
    } else {
      return (
        <>
          <h2 className="px-4 text-2xl sm:text-3xl text-center w-fit sm:w-[630px] mt-5 text-title-light-mode dark:text-[#CBD5E1] ">
            <span className="font-bold dark:text-white">
              Hello, I'm Quoc Duong
            </span>
            , a passionate
            <span className="font-bold dark:text-white">
              {" "}
              full-stack developer{" "}
            </span>
            with a focus on <span className="underline">React (Next.js)</span>.
            I thrive on creating
            <span className="font-bold dark:text-white">
              {" "}
              innovative websites{" "}
            </span>
            that bring ideas to life.
          </h2>
        </>
      );
    }
  };

  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-start bg-primary-light-mode dark:bg-primary-dark-mode "
    >
      <ImageProfile profileImage={Profile} mt="mt-60" size="small" />

      {renderHeroDescription()}

      <div className="mt-10 flex items-center justify-center flex-col sm:flex-row gap-4">
        <a
          href={`#${SECTION_ID.CONTACT}`}
          className="flex items-center justify-center gap-2 bg-button-light-mode dark:bg-button-dark-mode px-6 py-2 text-white dark:text-primary-dark-mode rounded-full font-semibold"
        >
          {getText("Contact me here")}
          <LiaLongArrowAltRightSolid />
        </a>

        <a
          href={cv}
          download="CV_Cao Đặng Quốc Dương"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 bg-white dark:bg-[#1E293B] px-6 py-2 text-primary-dark-mode dark:text-white rounded-full font-semibold shadow-custom"
        >
          {getText("Download CV")}
          <HiDownload />
        </a>

        <a
          target="_blank"
          href={`${GITHUB_LINK}`}
          className=" bg-white dark:bg-[#1E293B] p-3 text-primary-dark-mode dark:text-white rounded-full font-semibold shadow-custom"
        >
          <BsGithub />
        </a>

        <a
          href={`${FACEBOOK_LINK}`}
          target="_blank"
          className=" bg-white dark:bg-[#1E293B] p-3 text-primary-dark-mode dark:text-white rounded-full font-semibold shadow-custom"
        >
          <BsFacebook />
        </a>
      </div>
    </section>
  );
};

export default Hero;

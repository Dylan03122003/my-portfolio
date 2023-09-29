import { BsFacebook, BsGithub } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import ImageProfile from "../components/ImageProfile";
import { FACEBOOK_LINK, GITHUB_LINK } from "../data/social_media";
import { SECTION_ID } from "../utils/section_ids";
import Profile from "./../assets/profile_cleared.jpg";
const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen bg-primary-light-mode dark:bg-primary-dark-mode flex flex-col items-center justify-start"
    >
      <ImageProfile profileImage={Profile} mt="mt-60" size="small" />

      <h2 className="text-title-light-mode dark:text-[#CBD5E1] text-2xl sm:text-3xl text-center w-fit sm:w-[630px] mt-5">
        <span className="font-bold dark:text-white">Hello, I'm Quoc Duong</span>
        , a passionate
        <span className="font-bold dark:text-white">
          {" "}
          full-stack developer{" "}
        </span>
        with a focus on <span className="underline">React (Next.js)</span>. I
        thrive on creating
        <span className="font-bold dark:text-white"> innovative websites </span>
        that bring ideas to life.
      </h2>

      <div className="mt-10 flex items-center justify-center flex-col sm:flex-row gap-4">
        <a
          href={`#${SECTION_ID.CONTACT}`}
          className="flex items-center justify-center gap-2 bg-button-light-mode dark:bg-button-dark-mode px-6 py-2 text-white dark:text-primary-dark-mode rounded-full font-semibold"
        >
          Contact me here
          <LiaLongArrowAltRightSolid />
        </a>

        <button className="flex items-center justify-center gap-2 bg-white dark:bg-[#1E293B] px-6 py-2 text-primary-dark-mode dark:text-white rounded-full font-semibold shadow-custom">
          Download CV
          <HiDownload />
        </button>

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

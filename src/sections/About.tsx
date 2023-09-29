import ImageProfile from "../components/ImageProfile";
import ProgressBar from "../components/ProgressBar";
import Profile from "./../assets/profile_cleared.jpg";
const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center py-32 bg-primary-light-mode dark:bg-primary-dark-mode"
    >
      <h2 className=" text-3xl text-title-light-mode dark:text-white font-bold mb-10">
        About me
      </h2>

      <div className="w-[320px] md:w-[600px] lg:w-[1000px] flex flex-col md:flex-row items-center gap-16">
        <ImageProfile profileImage={Profile} size="medium" />
        <div className="flex flex-col lg:flex-row items-start justify-center gap-10 p-4 bg-white dark:bg-card-dark-mode rounded-md shadow-custom text-text-light-mode dark:text-text-dark-mode w-fit">
          <div className="text-justify flex-1 lg:flex-[0.6]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            voluptate corrupti temporibus odio mollitia possimus natus dolorem
            veritatis? Consequuntur porro quod ratione corporis eaque sit. Ipsam
            consequatur repudiandae sapiente quidem.
          </div>

          <div className="w-full flex-none lg:flex-[0.4]">
            <div className="mb-5 ">
              <div className="flex justify-between items-center mb-2">
                <h3>Development</h3>
                <p>80%</p>
              </div>
              <ProgressBar
                percentNumber={80}
                bgProgressColor="bg-red-300"
                bgBarColor="bg-[#F0F0F0] dark:bg-gray-400"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3>English</h3>
                <p>70%</p>
              </div>
              <ProgressBar
                percentNumber={70}
                bgProgressColor="bg-blue-300"
                bgBarColor="bg-[#F0F0F0] dark:bg-gray-400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

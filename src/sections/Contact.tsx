import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaPhoneVolume } from "react-icons/fa";
import SectionHeader from "../components/SectionHeader";
import { LINKEDIN_LINK } from "../data/social_media";
import { SECTION_ID } from "../utils/section_ids";

const contactItems = [
  {
    label: "Email",
    value: "duongcdq@gmail.com",
    href: "mailto:duongcdq@gmail.com",
    icon: <FaEnvelope className="w-5 h-5" />,
    external: false,
  },
  {
    label: "Phone",
    value: "0972000963",
    href: "tel:0972000963",
    icon: <FaPhoneVolume className="w-5 h-5" />,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/caodangquocduong",
    href: LINKEDIN_LINK,
    icon: <FaLinkedin className="w-5 h-5" />,
    external: true,
  },
];

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id={SECTION_ID.CONTACT}
      className="min-h-screen relative py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-primary-light-mode dark:bg-primary-dark-mode -z-10">
        <div
          className="absolute inset-0 opacity-5 dark:opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 sm:px-10 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center"
        >
          <SectionHeader
            mainTitle={"Contact Me"}
            subTitle={"Get in Touch"}
            description={
              "Feel free to reach out for any inquiries or collaborations."
            }
            icon={<FaPhoneVolume size={16} className="mr-2" />}
          />

          <motion.div
            variants={itemVariants}
            className="mt-12 w-full md:w-[700px] lg:w-[800px] rounded-xl overflow-hidden backdrop-blur-sm border border-white/10 shadow-2xl"
          >
            <div className="bg-white/80 dark:bg-gray-900/80 p-8 sm:p-10 space-y-4">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  {...(item.external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                  className="flex items-center gap-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 px-4 py-4 text-gray-800 dark:text-white transition-all duration-200 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-white dark:hover:bg-gray-800"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shrink-0">
                    {item.icon}
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-gray-500 dark:text-gray-400">
                      {item.label}
                    </span>
                    <span className="block text-base sm:text-lg font-semibold break-all">
                      {item.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

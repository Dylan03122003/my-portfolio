import emailjs from "@emailjs/browser";
import { FormEvent, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Language } from "../context/appContext";
import { useAppContext } from "../hooks/useAppContext";
import { SECTION_ID } from "../utils/section_ids";
import SectionHeader from "../components/SectionHeader";
import { FaPhoneVolume } from "react-icons/fa";

const Contact = () => {
  const { state, getText } = useAppContext();
  const form = useRef<HTMLFormElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Animation variants
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

  const formItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();

    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const message = messageRef.current?.value;

    if (!name || !email || !message) {
      return;
    }

    setIsLoading(true);
    try {
      const result = await emailjs.sendForm(
        "service_9uea9gb",
        "template_vn7fdc6",
        form.current ? form.current : "",
        "JoS3gi2Fimmr5x8Kw"
      );
      console.log(result);
      setIsSuccess(true);
      // Reset form
      if (form.current) form.current.reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id={SECTION_ID.CONTACT}
      className="min-h-screen relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-primary-light-mode dark:bg-primary-dark-mode -z-10">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-5 dark:opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        {/* Decorative shapes */}
        {/* <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-400 opacity-10 dark:opacity-5 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-indigo-400 opacity-10 dark:opacity-5 blur-3xl translate-y-1/2 -translate-x-1/2"></div> */}
      </div>

      <div className="container mx-auto px-6 sm:px-10 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center"
        >
          {/* Title with gradient and shimmer effect */}
          <SectionHeader
            mainTitle={"Contact Me"}
            subTitle={"Get in Touch"}
            description={
              "Feel free to reach out for any inquiries or collaborations."
            }
            icon={<FaPhoneVolume size={16} className="mr-2" />}
          />
          {/* Contact form card with glass morphism effect */}
          <motion.div
            variants={itemVariants}
            className="mt-12 w-full md:w-[700px] lg:w-[800px] rounded-xl overflow-hidden backdrop-blur-sm border border-white/10 shadow-2xl"
          >
            <div className="bg-white/80 dark:bg-gray-900/80 p-8 sm:p-10">
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-lg bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 text-center"
                >
                  {getText("Message sent successfully!")}
                </motion.div>
              )}

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <motion.div
                  variants={formItemVariants}
                  className="flex flex-col"
                >
                  <label className="text-gray-700 dark:text-gray-300 mb-2 font-medium">
                    {getText("Name")}
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    ref={nameRef}
                    required
                    className="border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 dark:bg-gray-800/50 text-gray-800 dark:text-white backdrop-blur-sm"
                    placeholder={
                      state.currentLanguage === Language.VN
                        ? "Nhập tên của bạn"
                        : "Enter your name"
                    }
                  />
                </motion.div>

                <motion.div
                  variants={formItemVariants}
                  className="flex flex-col"
                >
                  <label className="text-gray-700 dark:text-gray-300 mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    ref={emailRef}
                    required
                    className="border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 dark:bg-gray-800/50 text-gray-800 dark:text-white backdrop-blur-sm"
                    placeholder={
                      state.currentLanguage === Language.VN
                        ? "Nhập email của bạn"
                        : "Enter your email"
                    }
                  />
                </motion.div>

                <motion.div
                  variants={formItemVariants}
                  className="flex flex-col"
                >
                  <label className="text-gray-700 dark:text-gray-300 mb-2 font-medium">
                    {getText("Message")}
                  </label>
                  <textarea
                    name="message"
                    ref={messageRef}
                    required
                    rows={8}
                    className="border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 dark:bg-gray-800/50 text-gray-800 dark:text-white backdrop-blur-sm"
                    placeholder={
                      state.currentLanguage === Language.VN
                        ? "Viết tin nhắn của bạn ở đây..."
                        : "Write your message here..."
                    }
                  />
                </motion.div>

                <motion.div
                  variants={formItemVariants}
                  className="flex justify-end"
                >
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="px-6 py-3 font-semibold rounded-lg relative overflow-hidden group"
                  >
                    {/* Button background with gradient */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 transition-all duration-300 transform group-hover:scale-105"></span>

                    {/* Button text */}
                    <span className="relative z-10 text-white flex items-center">
                      {isLoading ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          {getText("Sending...")}
                        </>
                      ) : (
                        <>
                          {getText("Send")}
                          <svg
                            className="ml-2 h-5 w-5 transform transition-transform duration-200 group-hover:translate-x-1"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </>
                      )}
                    </span>
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Add custom animation styles */}
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;

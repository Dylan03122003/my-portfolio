import emailjs from "@emailjs/browser";
import { FormEvent, useRef, useState } from "react";
import { Language } from "../context/appContext";
import { FACEBOOK_LINK } from "../data/social_media";
import { useAppContext } from "../hooks/useAppContext";
import { SECTION_ID } from "../utils/section_ids";

const Contact = () => {
  const { state, getText } = useAppContext();
  const form = useRef<HTMLFormElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const renderContactMessage = () => {
    if (state.currentLanguage === Language.VN) {
      return (
        <h3 className="text-text-light-mode dark:text-text-dark-mode">
          Dễ dàng liên lạc với tôi bằng cách gửi tin nhắn trên{" "}
          <a
            className="text-blue-600 dark:text-blue-400 font-semibold text-lg"
            target="_blank"
            href={`${FACEBOOK_LINK}`}
          >
            Facebook
          </a>
          , hoặc nếu muốn, bạn cũng có thể sử dụng mẫu dưới đây để gửi tin nhắn
          của bạn.
        </h3>
      );
    } else {
      return (
        <h3 className="text-text-light-mode dark:text-text-dark-mode">
          Feel free to reach out by sending a message to my{" "}
          <a
            className="text-blue-600 dark:text-blue-400 font-semibold text-lg"
            target="_blank"
            href={`${FACEBOOK_LINK}`}
          >
            Facebook
          </a>
          , or alternatively, use the form below to send your message.
        </h3>
      );
    }
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
    const result = await emailjs.sendForm(
      "service_9uea9gb",
      "template_vn7fdc6",
      form.current ? form.current : "",
      "JoS3gi2Fimmr5x8Kw"
    );
    console.log(result);
    setIsLoading(false);
  };

  return (
    <div
      id={SECTION_ID.CONTACT}
      className=" flex flex-col items-center px-10 py-32 bg-primary-light-mode dark:bg-primary-dark-mode"
    >
      <h2 className="text-3xl text-title-light-mode dark:text-white font-bold mb-10">
        {getText("Contact")}
      </h2>

      {renderContactMessage()}

      <form
        ref={form}
        onSubmit={sendEmail}
        className="mt-10 w-full md:w-[700px] lg:w-[800px]"
      >
        <div className="flex flex-col mb-5">
          <label className="text-gray-600 dark:text-text-dark-mode mb-1">
            {getText("Name")}
          </label>
          <input
            type="text"
            name="user_name"
            ref={nameRef}
            required
            className="border border-gray-200 border-solid outline-none p-2 rounded-sm focus:border-blue-400 text-gray-600 dark:text-white dark:bg-card-dark-mode"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-gray-600 dark:text-text-dark-mode mb-1">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            ref={emailRef}
            required
            className="border border-gray-200 border-solid outline-none p-2 rounded-sm focus:border-blue-400 text-gray-600 dark:text-white dark:bg-card-dark-mode"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-gray-600 dark:text-text-dark-mode mb-1">
            {getText("Message")}
          </label>
          <textarea
            name="message"
            ref={messageRef}
            required
            rows={10}
            className="border border-gray-200 border-solid outline-none p-2 rounded-sm focus:border-blue-400 text-gray-600 dark:text-white dark:bg-card-dark-mode"
          />
        </div>
        <div className="flex justify-end">
          <button
            disabled={isLoading}
            type="submit"
            className="px-5 py-1 font-semibold rounded-md bg-primary-dark-mode dark:bg-primary-light-mode text-white dark:text-gray-700"
          >
            {isLoading ? getText("Sending...") : getText("Send")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;

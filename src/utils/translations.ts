import { Language } from "../context/appContext";

interface Translations {
  [key: string]: {
    en: string;
    vn: string;
  };
}

const translations: Translations = {
  "Contact me here": {
    en: "Contact me here",
    vn: "Liên lệ tại đây",
  },
  "Download CV": {
    en: "Download CV",
    vn: "Tải CV",
  },
  Home: {
    en: "Home",
    vn: "Trang chủ",
  },
  "About me": {
    en: "About me",
    vn: "Về tôi",
  },
  Projects: {
    en: "Projects",
    vn: "Dự án",
  },
  Skills: {
    en: "Skills",
    vn: "Kỹ năng",
  },
  Contact: {
    en: "Contact",
    vn: "Liên hệ",
  },
  Name: {
    en: "Name",
    vn: "Tên",
  },
  Message: {
    en: "Message",
    vn: "Tin nhắn",
  },
  Send: {
    en: "Send",
    vn: "Gửi",
  },
  "Sending...": {
    en: "Sending...",
    vn: "Đang gửi...",
  },
  "I am a diligent third-year student currently enrolled at FPT University. I have gained over 10 months of practical experience in working with React, Typescript, Express, and MySQL. I am actively looking for a challenging opportunity where I can apply my skillsand experience to make a meaningful contribution to your organization.":
    {
      en: "I am a diligent third-year student currently enrolled at FPT University. I have gained over 10 months of practical experience in working with React, Typescript, Express, and MySQL. I am actively looking for a challenging opportunity where I can apply my skillsand experience to make a meaningful contribution to your organization.",
      vn: "Tôi là một sinh viên chăm chỉ năm ba hiện đang theo học tại Đại học FPT. Tôi đã tích lũy được hơn 10 tháng kinh nghiệm luyện tập trong việc làm việc với React, Typescript, Express và MySQL. Tôi đang tích cực tìm kiếm một cơ hội thách thức, nơi tôi có thể áp dụng kỹ năng và kinh nghiệm của mình để đóng góp ý nghĩa cho tổ chức của bạn.",
    },
  "E-commerce Bookstore Website": {
    en: "E-commerce Bookstore Website",
    vn: "Website bán sách",
  },
  "Note-taking Website": {
    en: "Note-taking Website",
    vn: "Website ghi chú",
  },
  "Recipe Website": {
    en: "Recipe Website",
    vn: "Website hướng dẫn nấu ăn",
  },
  "Food Order Landing Page": {
    en: "Food Order Landing Page",
    vn: "Trang đặt thức ăn",
  },
  "Workout Tracker Website": {
    en: "Workout Tracker Website",
    vn: "Website theo dõi tập luyện",
  },
  "Youtube Karaoke TV Google Extension": {
    en: "Youtube Karaoke TV Google Extension",
    vn: "Youtube Karaoke TV Google Extension",
  },
  "Discussion Nest Website": {
    en: "Discussion Nest Website",
    vn: "Website bàn luận về công nghệ",
  },
};

export const getText = (text: string, language: Language) => {
  const notMatch = !translations[text];

  if (notMatch) {
    return "";
  }
  return translations[text][language];
};

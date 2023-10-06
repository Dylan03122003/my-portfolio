export const getCurrentColorMode = () => {
  const jsonValue = localStorage.getItem("color-mode-portfolio");
  if (jsonValue != null) return JSON.parse(jsonValue);
};

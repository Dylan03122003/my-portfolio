interface Scroller {
  isActive: boolean;
  sectionName: string;
  linkText: string;
}

export default function Scroller({
  isActive,
  sectionName,
  linkText,
}: Scroller) {
  return (
    <li
      className={`${
        isActive
          ? "bg-slate-100 dark:bg-slate-600"
          : "hover:bg-slate-100 dark:hover:bg-slate-600"
      } rounded-full px-3 py-1 transition-all`}
    >
      <a href={`#${sectionName}`}>{linkText}</a>
    </li>
  );
}

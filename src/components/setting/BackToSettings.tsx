import { HiArrowLeft } from "react-icons/hi2";

interface Props {
  onBack?: () => void;
  settingText: string;
}

export default function BackToSettings({ settingText, onBack }: Props) {
  return (
    <div className="mb-1 flex items-center gap-2 border-b-[1px] border-solid border-slate-200 dark:border-slate-700 p-2">
      <button
        onClick={onBack}
        type="button"
        className="rounded-full p-2 hover:bg-slate-100 hover:dark:bg-slate-600 transition-all"
      >
        <HiArrowLeft className="w-5 h-5 text-text-light-mode dark:text-text-dark-mode" />
      </button>
      <p className="text-lg text-text-light-mode dark:text-text-dark-mode">
        {settingText}
      </p>
    </div>
  );
}

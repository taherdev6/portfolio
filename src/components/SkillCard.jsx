import { useTranslation } from "react-i18next";

const SkillCard = ({ title, icon, text }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-3 items-center sm:items-start">
      <span>{icon}</span>
      <p className="font-semibold">{title}</p>
      <p className="text-slate-600 text-sm text-center sm:text-start">
        {t(text)}
      </p>
    </div>
  );
};

export default SkillCard;

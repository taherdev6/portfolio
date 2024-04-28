import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";
import { skills } from "../data";
import { useTranslation } from "react-i18next";
const Skills = () => {
  const { t } = useTranslation();
  return (
    <div
      id="skills"
      className="flex flex-col items-center py-12 px-12 gap-8 sm:items-stretch md:px-24"
    >
      <SectionTitle text={t("skills_heading")} />
      <div className="flex flex-col sm:flex-row gap-8 ">
        {skills.map((skill) => {
          return (
            <SkillCard
              key={skill.id}
              title={skill.title}
              icon={skill.icon}
              text={skill.text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;

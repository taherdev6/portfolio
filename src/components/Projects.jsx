import Project from "./Project";
import { projects } from "../data";
import SectionTitle from "./SectionTitle";
import { useTranslation } from "react-i18next";
const Projects = () => {
  const { t } = useTranslation();
  return (
    <div
      id="projects"
      className="flex flex-col items-center py-12 px-12 sm:items-stretch md:px-28"
    >
      <SectionTitle text={t("projects_heading")} />
      <div className="flex flex-col py-8 gap-4 lg:gap-16 sm:flex-row">
        {projects.map((project) => {
          return (
            <Project
              key={project.id}
              text={project.text}
              url={project.url}
              github={project.github}
              img={project.img}
              title={project.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

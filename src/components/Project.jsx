import { useTranslation } from "react-i18next";
import { FaGithub, FaGlobe } from "react-icons/fa";

const Project = ({ text, title, img, github, url }) => {
  const { t } = useTranslation();
  return (
    <div
      className="flex flex-col max-w-80
     bg-white border-2 rounded-lg border-white p-0 m-0 gap-4"
    >
      <img src={img} alt="" className="rounded-t-lg h-40 " />
      <div className=" px-4">
        <p className="font-semibold capitalize">{title}</p>
        <p className="mt-2 text-sm">{t(text)}</p>
      </div>
      <div className="flex text-xl px-4 pb-4 gap-4">
        <a href={github} target="_blank">
          <FaGithub />
        </a>
        <a href={url} target="_blank">
          <FaGlobe />
        </a>
      </div>
    </div>
  );
};

export default Project;

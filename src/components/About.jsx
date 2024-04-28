import SectionTitle from "./SectionTitle";
import aboutSvg from "../assets/about.svg";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div
      id="about"
      className="bg-white flex flex-col justify-around mt-16 py-12 gap-12 items-center sm:flex-row md: px-8  lg: px-20"
    >
      <img src={aboutSvg} className="w-80 hidden sm:block" />
      <div className=" flex flex-col gap-8 max-w-[30rem] items-center sm:items-stretch">
        <SectionTitle text={t("about_heading")} />
        <p className="min-w-[16rem] text-center sm:text-start">
          {t("about_text")}
        </p>
      </div>
    </div>
  );
};

export default About;

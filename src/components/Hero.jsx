import heroImg from "../assets/hero.svg";
import computerImg from "../assets/computer.svg";
import { FaGithubSquare, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const Hero = () => {
  const [hideEmail, setHideEmail] = useState(true);

  const { t } = useTranslation();
  return (
    <div
      className="bg-emerald-100 flex justify-around items-center py-12 
    text-slate-600
    "
    >
      <div className="flex flex-col gap-2">
        <p className="text-[3rem] font-bold text-black">{t("hero_heading")}</p>
        <p className="text-xl text-slate-700"> {t("hero_subheading")} </p>
        <p>{t("hero_text")}</p>
        <div className="flex gap-2 text-[2rem]">
          <a href="https://github.com/taherdev6" target="blank">
            <FaGithubSquare />
          </a>
          <button type="button" onClick={() => setHideEmail(!hideEmail)}>
            <FaEnvelope />
          </button>
          {
            <span
              className={`text-lg opacity-100 ${
                hideEmail && "invisible translate-x-6 opacity-0"
              } transition-all duration-[300ms]`}
            >
              taherdev6@gmail.com
            </span>
          }
        </div>
      </div>
      <img src={computerImg} className="w-80 hidden sm:block" />
    </div>
  );
};

export default Hero;

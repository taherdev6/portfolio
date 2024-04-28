import React from "react";
import { links } from "../data";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const { t } = useTranslation();
  return (
    <nav className="bg-emerald-100">
      <div
        className="mx-auto max-w-7xl px-8 py-4 justify-around flex
       flex-col sm:flex-row sm:gap-x-16 
       sm:items-center sm:py-8"
      >
        <h2 className="text-3xl font-bold">
          Taher<span className="text-emerald-600">Abdu</span>
        </h2>
        <div className="flex gap-x-8">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                href={href}
                key={id}
                className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
              >
                {t(text)}
              </a>
            );
          })}
          <div className="flex items-center">
            <button
              onClick={() => {
                document.querySelector("html").lang = "en";
                i18next.changeLanguage("en");
              }}
            >
              En
            </button>
            /
            <button
              onClick={() => {
                document.querySelector("html").lang = "ar";

                i18next.changeLanguage("ar");
              }}
            >
              عربي
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

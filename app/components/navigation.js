"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/public/assets/images/logo.svg";
import Moon from "@/public/assets/images/icon-moon.svg";

import FontSwitch from "./fontSwitch";
import SwitchButton from "./switch";

const Navigation = ({ savedFont, savedTheme }) => {
  const [theme, setTheme] = useState(savedTheme);

  useEffect(() => {
    if (theme == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    document.cookie = `theme=${theme}; path=/; max-age=31536000`;
  }, [theme]);

  return (
    <nav className="flex items-center justify-between">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="38"
        viewBox="0 0 34 38"
      >
        <g
          fill="none"
          fillRule="evenodd"
          className="dark:stroke-purple-500"
          stroke="#838383"
          strokeLinecap="round"
          strokeWidth="1.5"
        >
          <path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28" />
          <path strokeLinejoin="round" d="M5 37a4 4 0 1 1 0-8" />
          <path d="M11 9h12" />
        </g>
      </svg>
      <div className="flex items-center gap-3">
        <FontSwitch savedFont={savedFont} />
        <div className="w-[1px] h-8 bg-neutral-200"></div>
        <SwitchButton
          isOn={theme == "dark"}
          onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 22 22"
        >
          <path
            className="dark:stroke-purple-500"
            fill="none"
            stroke="#838383"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navigation;

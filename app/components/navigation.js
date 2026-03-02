"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "@/public/assets/images/logo.svg";
import Moon from "@/public/assets/images/icon-moon.svg";

import SwitchButton from "./switch";

const Navigation = ({}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <nav className="flex items-center justify-between">
      <Image src={Logo} className="" width="32" alt="Dictionary Logo" />
      <div className="flex items-center gap-3">
        <div className="w-[1px] h-8 bg-neutral-200"></div>
        <SwitchButton
          isOn={isDarkMode}
          onClick={() => setIsDarkMode(!isDarkMode)}
        />
        <Image src={Moon} className="" width="20" alt="Dark mode icon" />
      </div>
    </nav>
  );
};

export default Navigation;

import { useState, useEffect } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const fontTypes = ["sans", "serif", "mono"];

const FontSwitch = () => {
  const [currentFont, setCurrentFont] = useState(fontTypes[0]);

  useEffect(() => {
    document.documentElement.setAttribute("data-font", currentFont);
  }, [currentFont]);

  return (
    <div className="text-right text-sm/6">
      <Menu>
        <MenuButton className="cursor-pointer capitalize inline-flex items-center gap-4 font-semibold shadow-inner shadow-white/10 outline-none">
          {currentFont}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="8"
            viewBox="0 0 14 8"
          >
            <path
              fill="none"
              stroke="#A445ED"
              strokeWidth="1.5"
              d="m1 1 6 6 6-6"
            />
          </svg>
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl bg-white shadow-xs p-1 transition duration-100 ease-out [--anchor-gap:--spacing(1)] outline-none data-closed:scale-95 data-closed:opacity-0"
        >
          {fontTypes.map((font, idx) => (
            <MenuItem key={font} onClick={() => setCurrentFont(font)}>
              <button className="group cursor-pointer capitalize flex w-full items-center gap-2 rounded-lg px-3 py-1.5 transition duration-50 ease-out data-focus:bg-purple-500/10">
                {font}
              </button>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
};

export default FontSwitch;

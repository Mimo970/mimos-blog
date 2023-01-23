import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
// import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme("light");
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div className="flex items-center">
      <button
        className="outline w-6 h-6  rounded-lg  flex items-center justify-center "
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        aria-label="Toggle Dark Mode"
      >
        {theme === "light" ? (
          <MoonIcon className="text-black w-5 h-5" />
        ) : (
          <SunIcon className="text-white w-5 h-5" />
        )}
      </button>
      {/* <div className="px-1">Theme</div> */}
    </div>
  );
};

export default ThemeToggler;

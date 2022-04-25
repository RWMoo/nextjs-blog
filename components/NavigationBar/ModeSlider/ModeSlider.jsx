import { useState, useContext, useEffect} from "react";
import { Switch } from "@headlessui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../../ThemeProvider";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const isLight = theme === "light";

  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    mounted && (
      <Switch
        checked={isLight}
        onChange={() => {
          setTheme(isLight ? "dark" : "light");
        }}
        className={classNames(
          isLight ? "bg-gray-200" : "bg-gray-700",
          "relative inline-flex flex-shrink-0 h-7 w-14 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none items-center"
        )}
      >
        <span
          className={classNames(
            isLight
              ? "translate-x-7 bg-orange-500"
              : "translate-x-1 bg-indigo-500",
            "pointer-events-none relative inline-block h-5 w-5 rounded-full shadow transform ring-0 transition ease-in-out duration-200"
          )}
        >
          <span
            className={classNames(
              isLight
                ? "opacity-0 ease-out duration-100"
                : "opacity-100 ease-in duration-200",
              "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity "
            )}
            aria-hidden="true"
          >
            <FaMoon className="text-xs text-white " />
          </span>
          <span
            className={classNames(
              isLight
                ? "opacity-100 ease-in duration-200"
                : "opacity-0 ease-out duration-100",
              "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity "
            )}
            aria-hidden="true"
          >
            <FaSun className="text-xs text-white " />
          </span>
        </span>
      </Switch>
    )
  );
}

import ModeSwitch from "./ModeSlider/ModeSlider";
import { FaBars, FaSearch } from "react-icons/fa";
import { useState } from "react";

const NavigationBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <nav className="flex justify-between items-center px-2 h-20 w-full bg-primary text-primary">
      {!showSearch && (
        <button>
          <FaBars className="text-xl ml-2" />
        </button>
      )}
      <div className="flex justify-end items-center space-x-4 flex-grow">
        <button onClick={() => setShowSearch(!showSearch)}>
          <FaSearch className={"text-lg ml-2"} />
        </button>
        {!showSearch && (
          <div className="pr-1">
            <ModeSwitch />
          </div>
        )}
        {showSearch && <input className="h-10 w-full rounded-lg" />}
      </div>
    </nav>
  );
};

export default NavigationBar;

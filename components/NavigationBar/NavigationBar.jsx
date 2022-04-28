import ModeSwitch from "./ModeSlider/ModeSlider";
import { FaBars, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { Menu } from "@headlessui/react";

const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Discord",
    link: "https://discord.gg/programming",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const NavigationBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <nav className="flex  py-6 justify-between items-center px-5 h-20 w-full bg-primary text-body">
      <Menu>
        <Menu.Button>
          <FaBars className="text-xl " />
        </Menu.Button>
        <Menu.Items className="w-full absolute left-0 top-0 z-40 flex flex-col font-display">
          {links.map(item => <Item key={item.name} {...item}/>)}
        </Menu.Items>
      </Menu>
      <div className="flex justify-end items-center space-x-4 flex-grow">
        <button onClick={() => setShowSearch(!showSearch)}>
          <FaSearch className={"text-lg ml-2"} />
        </button>
        <div>
          <ModeSwitch />
        </div>
      </div>
    </nav>
  );
};

const Item = ({ name, link }) => {
  return (
    <Menu.Item className="py-3 text-center text-primary bg-slate-400">
      {({ active }) => (
        <a className={`${active && "bg-blue-500"}`} href={link}>
          {name}
        </a>
      )}
    </Menu.Item>
  );
};

export default NavigationBar;

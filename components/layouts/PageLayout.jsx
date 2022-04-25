import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar"
import { ThemeProvider } from "../ThemeProvider";

const PageLayout = ({ children }) => {
  return (
    <div className="bg-primary">
      <NavigationBar />
      <div className="container px-4 mx-auto text-gray-300">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;

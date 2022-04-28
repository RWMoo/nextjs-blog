import React from "react";
import Footer from "../Footer/Footer";
import NavigationBar from "../NavigationBar/NavigationBar"

const PageLayout = ({ children }) => {
  return (
    <div className="bg-primary flex flex-col">
      <NavigationBar />
      <div className="xl:container h-full flex-col px-4 md:px-8 mx-auto text-gray-300">
        {children}
      </div>
      <Footer/>
    </div>
  );
};

export default PageLayout;

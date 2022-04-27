import React from "react";
import Footer from "../Footer/Footer";
import NavigationBar from "../NavigationBar/NavigationBar"

const PageLayout = ({ children }) => {
  return (
    <div className="bg-primary">
      <NavigationBar />
      <div className="xl:container px-4 md:px-8 mx-auto text-gray-300">
        {children}
      </div>
      <Footer/>
    </div>
  );
};

export default PageLayout;

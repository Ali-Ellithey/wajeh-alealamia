import React from "react";
import HomeSidler from "../Components/Home/HomeSidler.jsx";
import Services from "../Components/Home/Services.jsx";
import BusinessSolutions from "../Components/Home/BusinessSolutions.jsx";
import AboutUS from "../Components/Home/AboutUS.jsx";

export const HomePages = () => {
  return (
    <div>
      <HomeSidler />
      <Services />
      <BusinessSolutions />
      <AboutUS />
    </div>
  );
};
export default HomePages;

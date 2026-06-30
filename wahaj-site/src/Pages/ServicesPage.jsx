import React from "react";
import HomeServices from "../Components/Services/HomeServices.jsx";
import ServicesContent from "../Components/Services/ServicesContent.jsx";
import BusinessSolutions from "../Components/Home/BusinessSolutions.jsx";
import InvestMents from "../Components/Services/InvestMents.jsx";
export const ServicesPage = () => {
  return (
    <div>
      <HomeServices />
      <ServicesContent />
      <BusinessSolutions />
      <InvestMents />
    </div>
  );
};

export default ServicesPage;

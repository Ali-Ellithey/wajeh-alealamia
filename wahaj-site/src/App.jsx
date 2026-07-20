import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Routes, Route } from "react-router-dom";

import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import HomePages from "./Pages/HomePages.jsx";
import ServicesPage from "./Pages/ServicesPage.jsx";
import ContactUs from "./Pages/ContactUs.jsx";

import BrandCars from "./Pages/BrandCars.jsx";

import LuxuryCarsDetails from "./Components/CardDatials/LuxuryCarsDetails.jsx";
import EconomyCarsDetails from "./Components/CardDatials/EconomyCarsDetails.jsx";
import SportsCarsDetails from "./Components/CardDatials/SportsCarsDetails.jsx";
import FamilyCarsDetails from "./Components/CardDatials/FamilyCarsDetails.jsx";

import FloatingButtons from "./Components/FloatingButtons.jsx";

function App() {
  return (
    <div className="app-wrapper">
      <NavBar />
      <FloatingButtons />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/HomeServices" element={<ServicesPage />} />
        <Route path="/contacted" element={<ContactUs />} />

        <Route path="/brand-cars" element={<BrandCars />} />

        <Route path="/luxury-cars-details" element={<LuxuryCarsDetails />} />
        <Route path="/economy-cars-details" element={<EconomyCarsDetails />} />
        <Route path="/suv-cars-details" element={<SportsCarsDetails />} />
        <Route path="/family-cars-details" element={<FamilyCarsDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

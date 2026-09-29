import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import HomePages from "./Pages/HomePages.jsx";
import ContactUs from "./Pages/ContactUs.jsx";

import Doctors from "./Pages/Doctors.jsx";
import BusinessSolutions from "./Components/Home/BusinessSolutions.jsx";
import FloatingButtons from "./Components/FloatingButtons.jsx";

// ملفات التخصصات الطبية الـ 8
import DentalImplants from "./Components/CardDatials/DentalImplants.jsx";
import Orthodontics from "./Components/CardDatials/Orthodontics.jsx";
import TeethWhitening from "./Components/CardDatials/TeethWhitening.jsx";
import HollywoodSmile from "./Components/CardDatials/HollywoodSmile.jsx";
import RootCanal from "./Components/CardDatials/RootCanal.jsx";
import PediatricDentistry from "./Components/CardDatials/PediatricDentistry.jsx";
import GumCare from "./Components/CardDatials/GumCare.jsx";
import CosmeticDentistry from "./Components/CardDatials/CosmeticDentistry.jsx";

function App() {
  return (
    <div className="app-wrapper">
      <NavBar />
      <FloatingButtons />
      <Routes>
        <Route path="/" element={<HomePages />} />

        {/* تغطية المسارين معاً لمنع خطأ الـ No routes matched */}

        <Route path="/contacted" element={<ContactUs />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/business-solutions" element={<BusinessSolutions />} />

        {/* مسارات الخدمات والتخصصات الطبية المستقلة */}
        <Route path="/dental-implants" element={<DentalImplants />} />
        <Route path="/orthodontics" element={<Orthodontics />} />
        <Route path="/teeth-whitening" element={<TeethWhitening />} />
        <Route path="/hollywood-smile" element={<HollywoodSmile />} />
        <Route path="/root-canal" element={<RootCanal />} />
        <Route path="/pediatric-dentistry" element={<PediatricDentistry />} />
        <Route path="/gum-care" element={<GumCare />} />
        <Route path="/cosmetic-dentistry" element={<CosmeticDentistry />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

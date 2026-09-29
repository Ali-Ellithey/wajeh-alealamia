import React from "react";
import Contact from "../Components/HomeContact/Contact.jsx";
import MapContacts from "../Components/HomeContact/MapContacts.jsx";
import AddressInfo from "../Components/HomeContact/AddressInfo.jsx";
import { useMediaQuery } from "react-responsive";

import FormContact from "../Components/HomeContact/FormContact.jsx";

export const ContactUs = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 992px)" });

  return (
    <div>
      <Contact />
      <MapContacts />

      <FormContact />
    </div>
  );
};

export default ContactUs;

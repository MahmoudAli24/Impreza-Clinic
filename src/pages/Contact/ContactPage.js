import React, { Fragment } from "react";
import Contact from "./../../components/Contact/Contact";
import ContactLocations from "./ContactLocations";

function ContactPage() {
  return (
    <Fragment>
      <Contact text="Contact Us" />
      <ContactLocations />
    </Fragment>
  );
}

export default ContactPage;

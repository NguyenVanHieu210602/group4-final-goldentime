import React from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import ContactInfo from "../components/homeComponents/ContactInfo";

const HomeScreen = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default HomeScreen;

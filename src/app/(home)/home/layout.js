import ContactSection from "@/_components/ContactSection";
import Footer from "@/_components/Footer";
import HomePageBanner from "@/_components/HomePageBanner";
import Navbar from "@/_components/Navbar";
import React from "react";

const HomeLayout = ({ children }) => {
  return (
    <div>
      {" "}
      <Navbar />
      {children}
      <HomePageBanner />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomeLayout;

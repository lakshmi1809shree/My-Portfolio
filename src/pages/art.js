import React from "react";
import CardTinder from "../components/CardTinder";
import ContactBanner from "../components/ContactBanner";
import Footer from "../components/Footer";
import ParticleBackground from "../components/ParticleBackground";
const Art = () => {
  return (
    <>
      <div>
        <ParticleBackground/>
        <CardTinder />
        <ContactBanner />
        <Footer/>
      </div>
      
      
    </>  
  );
};

export default Art;
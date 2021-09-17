import React from "react";
import Footer from "../components/Footer";
import ParticleBackground from "../components/ParticleBackground";
import ContactBanner from "../components/ContactBanner";
import PoetryCard from "../components/CardPoetry";

const Poetry = () => {
  return (
    <>
      <ParticleBackground />
      <PoetryCard />
      <ContactBanner />
      <Footer/>
   </>   
  );
};

export default Poetry;
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AboutPage from "./AboutPage";
import ContactUsPage from "./ContactUsPage";
import HomePage from "./HomePage";
import MenuPage from "./MenuPage";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <div>
      <AnimatePresence>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedRoutes;

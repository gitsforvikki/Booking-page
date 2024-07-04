// Assuming you have imported Tailwind CSS in your project
import React, { useState } from "react";
import BookingPannel from "./components/body-compos/BookingPannel";
import SpecialOffer from "./components/body-compos/SpecialOffer";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import Amenities from "./components/body-compos/Amenities";
import Dashboard from "./components/header/Dashboard";
import Bar from "./components/header/Bar";
import MobileNav from "./components/header/MobileNav";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const handleVisible = () => setIsVisible(!isVisible);

 
  return (
    <div className="relative">
      <div
        className={`h-full ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        {/* <button onClick={() => setIsDarkMode(!isDarkMode)}>
          Toggle Dark Mode
        </button> */}

        {/* <div className="absolute top-5 w-full flex justify-center">
          <Navbar />
        </div> */}
        {isVisible && (
          <div className="mobile-nav  w-full z-50">
            <MobileNav />
          </div>
        )}
        <div className="z-30">
          <Dashboard onhandleClick={handleVisible} />
        </div>
        <div className="flex flex-col mx-4 sm:mx-0 bg-slate-100 ">
          <BookingPannel />
          <Amenities />
          <SpecialOffer />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;

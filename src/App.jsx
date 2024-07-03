// Assuming you have imported Tailwind CSS in your project
import React, { useState } from "react";
import BookingPannel from "./components/body-compos/BookingPannel";
import SpecialOffer from "./components/body-compos/SpecialOffer";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="relative">
      <div
        className={`h-screen ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          Toggle Dark Mode
        </button>
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Welcome to My App</h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="absolute top-5 w-full flex justify-center">
          <Navbar />
        </div>
        <BookingPannel />
        <SpecialOffer />
        <Footer />

        <div className="mt-[100px]">...............</div>
      </div>
    </div>
  );
};

export default App;

// HeroSection.tsx
import React from "react";
import { useNavigate } from "react-router";

const HeroSection = () => {
  const navigate = useNavigate();

  // go to ui
  const handelNavigation = () => {
    navigate("/ui");
  };
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/ycwJg3p9/sergei-a-he-LWtu-AN3c-unsplash.jpg)",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e908089a] to-[#00000081] bg-opacity-60" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Welcome to Pathan UI</h1>
        <p className="mb-5">
          this is my personal ui library on react for my personal use , the all
          ui made of react and tailwind css all ui is free and open source the
          animation of this ui made of css or framer motion or gsap
        </p>
        <button
          onClick={handelNavigation}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;

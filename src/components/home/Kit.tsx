import React from "react";
import HeroSection from "./HeroSection";
import Button from "./Button";
import "./home.css";
import Typography from "./Typography";
import Image from "./Image";
import Input from "./ui/Input";

const Kit = () => {
  return (
    <div>
      <div>
        <div>
          {/* the bane image */}
          <HeroSection />
        </div>
        <div className="mt-[var(--margin-top)] ml-[var(--margin-left)] ">
          {/* button */}
          <Button />
        </div>
        <div className="mt-[var(--margin-top)] ml-[var(--margin-left)] ">
          {/* input */}
          <Input />
        </div>
        <div className="mt-[var(--margin-top)] ml-[var(--margin-left)] ">
          {/* Checkboxes */}
        </div>
        <div className="mt-[var(--margin-top)] ml-[var(--margin-left)] ">
          {/* Menu */}
        </div>
        <div className="mt-[var(--margin-top)] ml-[var(--margin-left)] ">
          {/* Navigation */}
        </div>
        <div className="mt-[var(--margin-top)] ml-[var(--margin-left)] ">
          {/* Navigation Tabs */}
        </div>
        <div className="mt-[var(--margin-top)] ml-[var(--margin-left)] ">
          {/* Progress Bars */}
        </div>
        <div className="mt-[var(--margin-top)] ml-[var(--margin-left)] ">
          {/* Notifications */}
        </div>
        <div className="mt-[var(--margin-top)] ml-[var(--margin-left)] ">
          {/* Typography */}
          <Typography />
        </div>
        <div className="mt-[var(--margin-top)] ml-[var(--margin-left)] ">
          {/* Images */}
          <Image />
        </div>
        <div className="mt-[var(--margin-top)] ml-[var(--margin-left)] ">
          {/* Javascript components */}
        </div>
        <div className="mt-[var(--margin-top)] ml-[var(--margin-left)] ">
          {/* Carousel */}
        </div>
        <div className="mt-[var(--margin-top)] ml-[var(--margin-left)] ">
          {/* Nucleo Icons */}
        </div>
        <div className="mt-[var(--margin-top)] ml-[var(--margin-left)] ">
          {/* Completed with examples */}
        </div>
        <div className="mt-[var(--margin-top)] ml-[var(--margin-left)] ">
          {/* footer */}
        </div>
      </div>
    </div>
  );
};

export default Kit;

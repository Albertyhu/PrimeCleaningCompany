import React, { useState } from "react";
import Logo from "./logo.tsx";
import useMediaQuery from "../utils/useMediaQuery.ts";
import { motion } from "framer-motion";
//import Logo from "@/assets/PrimeCleaningCo2.png" 
import SiteData from "@/customization/siteData.json"
import Phone from "@/assets/icons/phone.png";
import Mail from "@/assets/icons/mail.png"; 

const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");

  const linkStyle = "text-xl leading-6 font-jost text-primary-200";

  return (
    <div
      className = 'w-full fixed z-10 bg-white'
    >
      <div
        className = "hidden sm:flex bg-primaryColor w-full h-[30px] flex-row text-white justify-between px-[45px] font-jos [&>*]:my-auto"
      >
        <div className="flex flex-row">
            <img src = {Phone.src} alt = "phone icon" className = "w-[20px] h-[20px] my-auto mr-[5px] "/> Call Us: <a href = {`tel:${SiteData.business_phone}`}>{SiteData.business_phone}</a>
        </div>
        <div className="flex flex-row">
        <img src = {Mail.src} alt = "phone icon" className = "w-[20px] h-[20px] my-auto mr-[5px] "/> 
          Email: {SiteData.business_email}
        </div>
      </div>
      <div className="max-w-[1200px] bg-white px-12 xl:px-0 m-auto w-full py-5 flex justify-between items-center">
        <a href="/">
          <Logo 
            customDiv = "w-full h-[80px]"
          />
        </a>

        {/* Nav List for Desktop */}
        {matches && (
          <nav className="flex flex-row gap-6">
            <a href="/" className={linkStyle}>
              Home
            </a>
            <a href="/about" className={linkStyle}>
              About Us
            </a>
            <a href="/services" className={linkStyle}>
              Services
            </a>
            <a href="/FAQ" className={linkStyle}>
              FAQ
            </a>
            <a href="/contact" className={linkStyle}>
              Contact Us
            </a>
          </nav>
        )}

        {!matches && (
          <div
            onClick={() => setToggled(!toggled)}
            className="space-y-1 cursor-pointer"
          >
            <motion.span
              animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
              className="block h-0.5 w-8 bg-black"
            ></motion.span>
            <motion.span
              animate={{ width: toggled ? 0 : 24 }}
              className="block h-0.5 w-6 bg-black"
            ></motion.span>
            <motion.span
              animate={{
                rotateZ: toggled ? -45 : 0,
                y: toggled ? -8 : 0,
                width: toggled ? 32 : 16,
              }}
              className="block h-0.5 w-4 bg-black"
            ></motion.span>
          </div>
        )}

        {toggled && !matches && (
          <motion.nav
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col fixed h-screen bg-white w-[75%] md:w-[90%] text-black bottom-0 left-0 gap-6 items-center justify-center z-10"
          >
            <a href="/" className={linkStyle}>
              Home
            </a>
            <a href="/about" className={linkStyle}>
              About Us
            </a>
            <a href="/services" className={linkStyle}>
              Services
            </a>
            <a href="/FAQ" className={linkStyle}>
              Frequently Asked Questions
            </a>
            <a href="/contact" className={linkStyle}>
              Contact Us
            </a>
          </motion.nav>
        )}
      </div>
    </div>
  );
};

export default Navbar;

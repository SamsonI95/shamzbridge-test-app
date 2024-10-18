import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosMoon, IoMdCloseCircleOutline } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import {
  FaCircleUp,
  FaGraduationCap,
  FaPeopleGroup,
  FaTrophy,
  FaUserTie,
  FaHandshake,
  FaGifts,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";
import "./App.css";
import HomeCarousel from "./HomeCarousel";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const userPreference = localStorage.getItem("theme");
    if (userPreference) {
      return userPreference === "dark";
    }
    // If no user preference, auto-switch based on the time of day
    const hour = new Date().getHours();
    return hour >= 19 || hour < 7; // 7 PM to 7 AM for dark mode
  });

  // Handle theme changes and store user preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  //smooth scrolling
  const smoothScrollTo = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  //Scroll to Top
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Handle scroll event to show/hide the scroll to top button
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //mobile navbar
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* NavBar */}
      <nav className="flex p-8 bg-gray-100 dark:bg-gray-800">
        <div className="hidden md:flex items-center space-x-4 font-bold justify-between w-full">
          <h3 className="font-bold text-2xl bg-gradient-to-r from-blue-600 via-[#216aff] to-[#913aff] inline-block text-transparent bg-clip-text">
            HR Solutions
          </h3>
          <div className="flex items-center space-x-4">
            <a
              href="#home"
              onClick={(e) => smoothScrollTo(e, "home")}
              className="dark:text-white hover:text-[#1877F2] dark:hover:text-[#1877F2]"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => smoothScrollTo(e, "about")}
              className="dark:text-white hover:text-[#1877F2] dark:hover:text-[#1877F2]"
            >
              About
            </a>
            <a
              href="#services"
              onClick={(e) => smoothScrollTo(e, "services")}
              className="dark:text-white hover:text-[#1877F2] dark:hover:text-[#1877F2]"
            >
              Services
            </a>

            <button onClick={() => setDarkMode(!darkMode)} className="p-2">
              {darkMode ? (
                <IoSunnyOutline className="text-yellow-500" />
              ) : (
                <IoIosMoon className="text-gray-900" />
              )}
            </button>
          </div>
        </div>

        <div className="md:hidden w-full">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-2xl bg-gradient-to-r from-blue-600 via-[#216aff] to-[#913aff] inline-block text-transparent bg-clip-text mb-4">
              HR Solutions
            </h3>
            {isMenuOpen ? (
              <IoMdCloseCircleOutline
                className="text-2xl cursor-pointer dark:text-white"
                onClick={toggleMenu}
              />
            ) : (
              <GiHamburgerMenu
                className="text-2xl cursor-pointer dark:text-white"
                onClick={toggleMenu}
              />
            )}
          </div>
          {isMenuOpen && (
            <ul
              className={`navbar-dropdown flex flex-col gap-4 text-right ${
                isMenuOpen ? "open" : ""
              }`}
            >
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    smoothScrollTo(e, "services");
                    setIsMenuOpen(false);
                  }}
                  className="text-blue-500 dark:text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    smoothScrollTo(e, "about");
                    setIsMenuOpen(false);
                  }}
                  className="text-blue-500 dark:text-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    smoothScrollTo(e, "services");
                    setIsMenuOpen(false);
                  }}
                  className="text-blue-500 dark:text-white"
                >
                  Services
                </a>
              </li>
              <li>
                <button onClick={() => setDarkMode(!darkMode)} className="p-2">
                  {darkMode ? (
                    <IoSunnyOutline className="text-yellow-500" />
                  ) : (
                    <IoIosMoon className="text-gray-900" />
                  )}
                </button>
              </li>
            </ul>
          )}
        </div>
      </nav>

      <div className="section-container">
        {/* Home Section */}
        <section
          id="home"
          className="section min-h-screen p-8 bg-white dark:bg-gray-900 dark:text-white"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold mt-[2rem]">
              Empowering Your Workforce
            </h1>
            <p className="my-4">
              Innovative HR solutions tailored to your business needs.
            </p>
          </div>
          <HomeCarousel />
          {/* <div className="text-center">
    <h1 className="text-4xl font-bold mt-[4rem]">
      Empowering Your Workforce
    </h1>
    <p className="mt-4">
      Innovative HR solutions tailored to your business needs.
    </p>
    <button className="text-white dark:text-white mt-[4rem] px-6 py-2 bg-blue-600 rounded shadow hover:bg-blue-700">
      Get Started
    </button>
  </div> */}
        </section>

        {/* About Section */}
        <section
          id="about"
          className="section relative flex flex-col items-center justify-center min-h-screen p-8 bg-gray-200 dark:bg-gray-700 dark:text-white w-full"
        >
          <h2 className="absolute top-[5rem] text-center text-[52px] font-bold">
            Our Vision and Mission
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-evenly dark:text-black cursor-pointer">
            <div className="mt-4 border border-transparent rounded-lg lg:w-[45%] bg-gray-400 dark:bg-white p-4 hover:scale-105 hover:shadow-lg hover:-translate-y-2 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold">Our Mission</h3>
              <p>
                Our mission is to provide innovative HR solutions that empower
                businesses to thrive. We strive to enhance employee engagement
                and productivity through effective human resource practices.
              </p>
            </div>
            <div className="mt-4 border border-transparent rounded-lg lg:w-[45%] bg-gray-400 dark:bg-white p-4 hover:scale-105 hover:shadow-lg hover:-translate-y-2 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold">Our Vision</h3>
              <p>
                We envision a world where organizations harness the full
                potential of their workforce through strategic HR initiatives,
                creating a positive impact on both businesses and employees.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="section flex flex-col items-center justify-center min-h-screen p-8 bg-gray-400 dark:bg-gray-600 dark:text-white"
        >
          <h2 className="text-3xl font-bold mb-10">Our Services</h2>
          <ul className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-4 list-inside">
            <li className="border border-transparent bg-white flex flex-col items-center justify-center text-center text-black w-[250px] p-4 rounded-lg">
              <FaHandshake className="text-2xl" />
              <h3 className="text-xl font-semibold mb-4">Talent Acquisition</h3>
              <p>
                We help you find and recruit top talent to fill critical roles
                in your organization.
              </p>
            </li>
            <li className="border border-transparent bg-white flex flex-col items-center justify-center text-center text-black w-[250px] p-4 rounded-lg">
              <FaGraduationCap className="text-2xl" />
              <h3 className="text-xl font-semibold mb-4">
                Employee Training and Development
              </h3>
              <p>
                We provide tailored programs to enhance employee skills and
                support career growth.
              </p>
            </li>
            <li className="border border-transparent bg-white flex flex-col items-center justify-center text-center text-black w-[250px] p-4 rounded-lg">
              <FaTrophy className="text-2xl" />
              <h3 className="text-xl font-semibold mb-4">
                Performance Management
              </h3>
              <p>
                We assist in setting up systems to evaluate and improve employee
                performance effectively.
              </p>
            </li>
            <li className="border border-transparent bg-white flex flex-col items-center justify-center text-center text-black w-[250px] p-4 rounded-lg">
              <FaUserTie className="text-2xl" />
              <h3 className="text-xl font-semibold mb-4">HR Consulting</h3>
              <p>
                We offer expert advice on human resource strategies to optimize
                your workplace.
              </p>
            </li>
            <li className="border border-transparent bg-white flex flex-col items-center justify-center text-center text-black w-[250px] p-4 rounded-lg">
              <FaPeopleGroup className="text-2xl" />
              <h3 className="text-xl font-semibold mb-4">
                Workplace Diversity Initiatives
              </h3>
              <p>
                We help implement diversity programs to foster an inclusive work
                environment.
              </p>
            </li>
            <li className="border border-transparent bg-white flex flex-col items-center justify-center text-center text-black w-[250px] p-4 rounded-lg">
              <FaGifts className="text-2xl" />
              <h3 className="text-xl font-semibold mb-4">
                Employee Benefits and Compensation
              </h3>
              <p>
                We design competitive benefits and compensation packages to
                attract and retain top talent.
              </p>
            </li>
          </ul>
        </section>
      </div>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-12 right-6 p-2 bg-blue-600 dark:bg-white text-white dark:text-blue-600 rounded-full shadow-lg hover:scale-105"
        >
          <FaCircleUp className="text-2xl" />
        </button>
      )}

      {/* Footer */}
      <footer className="p-4 bg-gray-100 dark:bg-gray-800 text-center dark:text-white">
        <div className="flex justify-center space-x-6 mb-4">
          {/* Links to sections */}
          <a
            href="#home"
            onClick={(e) => smoothScrollTo(e, "home")}
            className="text-blue-500 hover:text-blue-700"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => smoothScrollTo(e, "about")}
            className="text-blue-500 hover:text-blue-700"
          >
            About Us
          </a>
          <a
            href="#services"
            onClick={(e) => smoothScrollTo(e, "services")}
            className="text-blue-500 hover:text-blue-700"
          >
            Services
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-blue-600 hover:text-blue-800" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-blue-400 hover:text-blue-600" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="text-blue-500 hover:text-blue-700" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-pink-500 hover:text-pink-700" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 dark:text-gray-400">
          © 2024 HR Solutions. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaBehance,
} from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import Services from "../components/Services";
import Works from "../components/Works";
import Contact from "../components/Contact";
import "../styles/Home.css"; // Ensure CSS is correctly imported

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const rotatingTexts = ["DESIGNING", "DEVELOPING", "CREATIVITY"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 2000); // Change every 2 seconds
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="home min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}
      <Header />

      {/* Main Section with Rotating Text */}
      <section
        id="home" // Ensure the section has the correct ID for CSS targeting
        className="flex-grow flex flex-col items-center justify-center text-center py-40 px-4"
      >
        <h2 className="text-md text-gray-400 mb-4 uppercase">
          Software Developer & Web Designer
        </h2>
        <h1 className="text-7xl font-bold text-white">
          <div className="rotating-text">
            <span>{rotatingTexts[currentIndex]}</span>
          </div>
        </h1>
        <p className="text-gray-400 mt-4 text-lg mt-5">
          I'm a Creative Designer and I make things work. <br />
          Turning your dreams into reality.
        </p>

        {/* Social Media Icons using React Icons */}
        <div className="social-icons mt-8 flex justify-center space-x-6">
          <a href="#" className="text-white hover:text-gray-500">
            <FaFacebookF size={20} /> {/* Facebook Icon */}
          </a>
          <a href="#" className="text-white hover:text-gray-500">
            <FaTwitter size={20} /> {/* Twitter Icon */}
          </a>
          <a href="#" className="text-white hover:text-gray-500">
            <FaInstagram size={20} /> {/* Instagram Icon */}
          </a>
          <a href="#" className="text-white hover:text-gray-500">
            <FaPinterest size={20} /> {/* Pinterest Icon */}
          </a>
          <a href="#" className="text-white hover:text-gray-500">
            <FaBehance size={20} /> {/* Behance Icon */}
          </a>
        </div>
      </section>

      {/* Additional Content */}
      <main>
        <About />
        <Services />
        <Works />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-white text-gray-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default Home;

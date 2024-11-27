import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Header = () => {
  // State to track the scroll position
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true); // Change header background when scrolled more than 50px
      } else {
        setScrolled(false); // Keep header transparent when at the top
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu when clicking outside
  const handleOverlayClick = () => {
    if (menuOpen) setMenuOpen(false);
  };

  return (
    <header className="w-full">
      <nav
        className={`fixed top-0 w-full flex justify-between px-8 lg:px-32 py-4 z-20 transition-all ${
          scrolled ? "bg-[#111111]" : "bg-transparent"
        }`}
      >
        {/* Logo Section */}
        <div className="text-white text-3xl font-extrabold flex items-center">
          <span>İCLAL.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 text-white text-sm font-semibold items-center">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-gray-500 cursor-pointer text-sm"
          >
            HOME
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-gray-500 cursor-pointer text-sm"
          >
            ABOUT
          </Link>
          <Link
            to="works"
            smooth={true}
            duration={500}
            className="hover:text-gray-500 cursor-pointer text-sm"
          >
            WORKS
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-gray-500 cursor-pointer text-sm"
          >
            CONTACT
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden flex items-center ml-auto">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Overlay (for closing menu by clicking outside) */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20"
            onClick={handleOverlayClick}
          ></div>
        )}

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-black text-white flex flex-col items-start px-6 py-10 transform transition-transform z-30 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-gray-500 cursor-pointer text-lg mb-6"
            onClick={() => setMenuOpen(false)}
          >
            HOME
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-gray-500 cursor-pointer text-lg mb-6"
            onClick={() => setMenuOpen(false)}
          >
            ABOUT
          </Link>
          <Link
            to="works"
            smooth={true}
            duration={500}
            className="hover:text-gray-500 cursor-pointer text-lg mb-6"
            onClick={() => setMenuOpen(false)}
          >
            WORKS
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-gray-500 cursor-pointer text-lg"
            onClick={() => setMenuOpen(false)}
          >
            CONTACT
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

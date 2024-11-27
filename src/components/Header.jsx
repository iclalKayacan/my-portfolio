import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        <div className="text-white text-3xl font-extrabold flex items-center">
          <span>İCLAL.</span>
        </div>

        <div className="hidden lg:flex space-x-8 text-white text-sm font-semibold items-center">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-gray-500 cursor-pointer"
          >
            HOME
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-gray-500 cursor-pointer"
          >
            ABOUT
          </Link>
          <Link
            to="works"
            smooth={true}
            duration={500}
            className="hover:text-gray-500 cursor-pointer"
          >
            WORKS
          </Link>
          <Link
            to="blog"
            smooth={true}
            duration={500}
            className="hover:text-gray-500 cursor-pointer"
          >
            BLOG
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-gray-500 cursor-pointer"
          >
            CONTACT
          </Link>
        </div>

        <div className="lg:hidden flex items-center ml-auto">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20"
            onClick={handleOverlayClick}
          ></div>
        )}

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
            to="blog"
            smooth={true}
            duration={500}
            className="hover:text-gray-500 cursor-pointer text-lg mb-6"
            onClick={() => setMenuOpen(false)}
          >
            BLOG
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

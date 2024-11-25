import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Header = () => {
  // State to track the scroll position
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header className="w-full">
      <nav
        className={`fixed top-0 w-full flex justify-between px-32 py-5 z-10 transition-all ${
          scrolled ? "bg-[#111111]" : "bg-transparent"
        }`}
      >
        <div className="text-white text-3xl font-extrabold flex items-center">
          <span>İCLAL.</span>
        </div>
        <div className="flex space-x-8 text-white text-sm font-semibold items-center">
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
      </nav>
    </header>
  );
};

export default Header;

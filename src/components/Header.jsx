import { Link } from "react-scroll";

const Header = () => (
  <header className="w-full">
    <nav className="absolute top-0 w-full flex justify-between px-32 py-5 z-10">
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
          to="services"
          smooth={true}
          duration={500}
          className="hover:text-gray-500 cursor-pointer text-sm"
        >
          SERVICES
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

export default Header;

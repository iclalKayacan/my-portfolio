import { Link } from "react-scroll";

const Header = () => (
  <header className="w-full py-10 bg-cover bg-center relative bg-transparent">
    <nav className="absolute top-0 w-full flex justify-between px-16 py-5 z-10">
      <div className="text-white text-4xl font-extrabold flex items-center">
        <span>alison.</span>
      </div>
      <div className="flex space-x-8 text-white text-lg font-semibold items-center">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="hover:text-blue-500 cursor-pointer text-xl"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="hover:text-blue-500 cursor-pointer text-xl"
        >
          About
        </Link>
        <Link
          to="services"
          smooth={true}
          duration={500}
          className="hover:text-blue-500 cursor-pointer text-xl"
        >
          Services
        </Link>
        <Link
          to="works"
          smooth={true}
          duration={500}
          className="hover:text-blue-500 cursor-pointer text-xl"
        >
          Works
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="hover:text-blue-500 cursor-pointer text-xl"
        >
          Contact
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;

import { Link } from "react-router-dom";

const Header = () => (
  <header className=" fixed w-full z-50 shadow-sm">
    <nav className="container mx-auto flex justify-between items-center py-4 px-6">
      {/* Logo ve Marka İsmi */}
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold text-white">
          <Link to="/">İclal's Page</Link>
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-8 text-lg font-medium text-white">
        <Link className="hover:text-blue-500 transition" to="/mywork">
          My Work
        </Link>
        <Link className="hover:text-blue-500 transition" to="/about">
          About
        </Link>
        <Link className="hover:text-blue-500 transition" to="/blog">
          Blog
        </Link>
        <Link
          className="hover:text-blue-500 flex items-center transition"
          to="/newsletter"
        >
          <span>Newsletter</span>
          <span className="ml-2">📬</span>
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;

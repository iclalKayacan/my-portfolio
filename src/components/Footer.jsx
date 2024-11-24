const Footer = () => (
  <footer className="bg-gray-800 text-gray-400 py-6">
    <div className="container mx-auto text-center">
      <p>&copy; 2024 İclal Kayacan. All Rights Reserved.</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a
          href="https://github.com/iclalkayacan"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/iclal-kayacan"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 transition"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;

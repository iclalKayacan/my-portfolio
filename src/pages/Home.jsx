import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
    {/* Header */}
    <Header />

    {/* Main Content */}
    <main className="flex-grow flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-extrabold">
        Welcome to <span className="text-blue-500">My Portfolio</span>
      </h1>
      <p className="text-lg text-gray-400 mt-4">
        Frontend Developer | Blogger | Software Enthusiast
      </p>
      <button className="mt-6 bg-blue-500 text-gray-900 px-6 py-3 rounded-lg shadow hover:shadow-lg hover:bg-blue-600 transition">
        Check My Work
      </button>
    </main>

    {/* Footer */}
    <Footer />
  </div>
);

export default Home;

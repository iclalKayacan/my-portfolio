import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
    {/* Header */}
    <Header />

    {/* Main Content */}
    <main
      id="home"
      className="flex-grow flex flex-col items-center justify-center text-center py-40 px-4 bg-gray-900"
    >
      <h1 className="text-6xl md:text-8xl font-extrabold mb-8">
        Welcome to <span className="text-blue-500">My Portfolio</span>
      </h1>
      <p className="text-lg md:text-2xl text-gray-400 mt-4 max-w-4xl mx-auto">
        Frontend Developer | Blogger | Software Enthusiast. Passionate about
        creating beautiful, user-friendly web experiences. Take a look at my
        work below.
      </p>
      <button className="mt-8 bg-blue-500 text-gray-900 px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-600 transition">
        Check My Work
      </button>
    </main>

    {/* About Section */}
    <section id="about" className="py-40 bg-gray-800 text-white text-center">
      <h2 className="text-5xl md:text-6xl font-bold mb-6">About Me</h2>
      <p className="text-lg md:text-xl max-w-3xl mx-auto">
        I am a frontend developer who loves creating user-friendly and engaging
        websites. With experience in React, Next.js, and other modern web
        technologies, I am always looking to improve and take on new challenges.
        Let's create something amazing together!
      </p>
      <p className="text-lg md:text-xl max-w-3xl mx-auto mt-6">
        From static websites to dynamic web applications, I am passionate about
        bringing ideas to life with clean, maintainable code.
      </p>
    </section>

    {/* Services Section */}
    <section id="services" className="py-40 bg-gray-900 text-white text-center">
      <h2 className="text-5xl md:text-6xl font-bold mb-8">Services</h2>
      <p className="text-lg md:text-2xl max-w-4xl mx-auto mb-10">
        I offer a wide range of web development services. Whether you're looking
        for a new website, a redesign, or a custom web application, I can help
        bring your vision to life.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <div className="bg-gray-800 p-12 rounded-lg shadow-lg hover:shadow-xl">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-500 mb-4">
            Frontend Development
          </h3>
          <p className="text-gray-400 text-lg md:text-xl">
            I build responsive, interactive, and user-friendly websites using
            modern technologies like React, Next.js, and Tailwind CSS.
          </p>
        </div>
        <div className="bg-gray-800 p-12 rounded-lg shadow-lg hover:shadow-xl">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-500 mb-4">
            UI/UX Design
          </h3>
          <p className="text-gray-400 text-lg md:text-xl">
            I create beautiful and intuitive user interfaces that ensure your
            users have a smooth and engaging experience on all devices.
          </p>
        </div>
        <div className="bg-gray-800 p-12 rounded-lg shadow-lg hover:shadow-xl">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-500 mb-4">
            Web Applications
          </h3>
          <p className="text-gray-400 text-lg md:text-xl">
            I build powerful and scalable web applications that provide rich
            functionality and dynamic user experiences using modern frameworks
            and tools.
          </p>
        </div>
      </div>
    </section>

    {/* Works Section */}
    <section id="works" className="py-40 bg-gray-800 text-white text-center">
      <h2 className="text-5xl md:text-6xl font-bold mb-8">My Work</h2>
      <p className="text-lg md:text-2xl max-w-4xl mx-auto mb-12">
        Check out some of the projects I’ve worked on. Each project showcases my
        skills in creating effective, well-designed web applications that meet
        user needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <div className="bg-gray-700 p-12 rounded-lg shadow-lg hover:shadow-xl">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-500 mb-4">
            Project One
          </h3>
          <p className="text-gray-400 text-lg">
            A responsive website built using React and Tailwind CSS, focusing on
            clean design and mobile optimization.
          </p>
        </div>
        <div className="bg-gray-700 p-12 rounded-lg shadow-lg hover:shadow-xl">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-500 mb-4">
            Project Two
          </h3>
          <p className="text-gray-400 text-lg">
            A full-stack web application built with Next.js and Node.js,
            providing real-time data analytics for users.
          </p>
        </div>
        <div className="bg-gray-700 p-12 rounded-lg shadow-lg hover:shadow-xl">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-500 mb-4">
            Project Three
          </h3>
          <p className="text-gray-400 text-lg">
            A personal blog created with React and GraphQL, featuring a clean
            design and content management functionality.
          </p>
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section id="contact" className="py-40 bg-gray-900 text-white text-center">
      <h2 className="text-5xl md:text-6xl font-bold mb-8">Contact</h2>
      <p className="text-lg md:text-2xl max-w-4xl mx-auto mb-10">
        Feel free to reach out for collaborations, project inquiries, or just to
        say hello! I’m always open to new opportunities.
      </p>
      <button className="bg-blue-500 text-gray-900 px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-600 transition">
        Get in Touch
      </button>
    </section>

    {/* Footer */}
    <Footer />
  </div>
);

export default Home;

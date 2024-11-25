const Works = () => (
  <section
    id="works"
    className="py-60 bg-cover bg-center text-white px-10"
    style={{ backgroundImage: "url('/assets/desk.jpg')" }}
  >
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start">
      {/* Left Section: Text */}
      <div className="lg:w-1/3 text-left mb-10 lg:mb-0 lg:pr-12">
        <h2 className="text-3xl font-extrabold text-black mb-6">My Works</h2>
        <p className="text-lg font-light text-black leading-relaxed">
          Explore the projects I’ve worked on, showcasing my expertise in web
          development and design.
        </p>
      </div>

      {/* Right Section: Grid of Projects */}
      <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* Project 1 */}
        <div className="bg-black bg-opacity-50 rounded-lg p-6 shadow-lg hover:shadow-xl">
          <h3 className="text-xl font-bold mb-2 text-white">
            E-Commerce Project
          </h3>
          <p className="text-sm text-gray-400">
            A fully responsive e-commerce website with a modern design, secure
            payment integration, and seamless user experience.
          </p>
        </div>

        {/* Project 2 */}
        <div className="bg-black bg-opacity-50 rounded-lg p-6 shadow-lg hover:shadow-xl">
          <h3 className="text-xl font-bold mb-2 text-white">
            Portfolio Website
          </h3>
          <p className="text-sm text-gray-400">
            A sleek personal portfolio website designed to highlight skills,
            projects, and achievements using React and Tailwind CSS.
          </p>
        </div>

        {/* Project 3 */}
        <div className="bg-black bg-opacity-50 rounded-lg p-6 shadow-lg hover:shadow-xl">
          <h3 className="text-xl font-bold mb-2 text-white">
            Real-Time Chat App
          </h3>
          <p className="text-sm text-gray-400">
            A real-time chat application built with Next.js and Socket.io,
            providing instant messaging with a smooth UI.
          </p>
        </div>

        {/* Project 4 */}
        <div className="bg-black bg-opacity-50 rounded-lg p-6 shadow-lg hover:shadow-xl">
          <h3 className="text-xl font-bold mb-2 text-white">
            Dashboard Analytics
          </h3>
          <p className="text-sm text-gray-400">
            An interactive analytics dashboard with dynamic charts and real-time
            data processing, built using React and D3.js.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Works;

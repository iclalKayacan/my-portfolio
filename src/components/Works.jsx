const Works = () => (
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
          A full-stack web application built with Next.js and Node.js, providing
          real-time data analytics for users.
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
);

export default Works;

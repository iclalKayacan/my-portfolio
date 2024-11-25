const Services = () => (
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
          functionality and dynamic user experiences using modern frameworks and
          tools.
        </p>
      </div>
    </div>
  </section>
);

export default Services;

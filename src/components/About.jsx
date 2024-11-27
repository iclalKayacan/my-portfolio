const About = () => (
  <section
    id="about"
    className="flex items-center min-h-screen bg-black text-white px-10"
  >
    <div className="flex flex-col lg:flex-row items-center lg:items-start max-w-7xl mx-auto w-full">
      {/* Text Section */}
      <div className="lg:w-1/2 text-left">
        <h2 className="text-3xl font-extrabold mb-6 mt-5">ABOUT ME</h2>
        <p className="text-m font-light leading-relaxed text-gray-400 mb-4">
          My journey began in a small town where I discovered my passion for
          technology and creativity at an early age. From assembling computers
          to designing basic websites, my curiosity for innovation drove me to
          explore the world of programming.
        </p>
        <p className="text-m font-light leading-relaxed text-gray-400 mb-4">
          I pursued a degree in Computer Science, where I honed my skills in
          frontend development, focusing on crafting user-centric web
          applications. During this time, I worked on multiple projects that
          allowed me to merge design and functionality seamlessly.
        </p>
        <p className="text-m font-light leading-relaxed text-gray-400 mb-4">
          Over the years, I’ve worked with technologies like React, Next.js, and
          Node.js, building everything from static websites to dynamic, scalable
          applications. Beyond coding, I am deeply inspired by art and
          storytelling, which influence my designs and help me connect with
          audiences on a deeper level.
        </p>
        <p className="text-m font-light leading-relaxed text-gray-300">
          Today, as a frontend developer, I strive to create digital experiences
          that are not only visually appealing but also functional and
          accessible to all.
        </p>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center hidden lg:flex">
        <img
          src="/assets/me.jpg"
          alt="About Me"
          className="rounded-lg object-cover w-full max-w-md shadow-lg"
        />
      </div>
    </div>
  </section>
);

export default About;

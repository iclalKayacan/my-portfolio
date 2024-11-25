const Contact = () => (
  <section id="contact" className="py-40 bg-black text-white">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between px-6">
      {/* Left Section: Message Form */}
      <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          Let’s work together projects
        </h2>
        <p className="text-lg mb-8">Just send me email here</p>

        <form className="space-y-8">
          <div className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 bg-transparent border-b-2 border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:border-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 bg-transparent border-b-2 border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:border-white"
            />
            <textarea
              placeholder="Message"
              className="w-full p-2 bg-transparent border-b-2 border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:border-white"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-600 text-white py-3 rounded-md hover:bg-gray-700 transition mt-6"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Right Section: Contact Info */}
      <div className="lg:w-1/2 w-full text-left space-y-6 ml-40 mt-40">
        <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
        <p className="text-lg">Email: example@email.com</p>
        <p className="text-lg">Phone: +123 456 7890</p>
        <p className="text-lg">Address: 1234 Street, City, Country</p>
      </div>
    </div>
  </section>
);

export default Contact;

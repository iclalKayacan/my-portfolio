import Header from "../components/Header";
import Footer from "../components/Footer";

const MyWork = () => {
  const projects = [
    {
      id: 1,
      title: "Trello Clone",
      description:
        "Gerçek zamanlı sürükle-bırak işlevselliğiyle bir görev yönetim uygulaması.",
    },
    {
      id: 2,
      title: "Kişisel Web Sitesi",
      description:
        "React ve Tailwind CSS kullanarak oluşturduğum blog ve portföy sitesi.",
    },
    {
      id: 3,
      title: "E-Ticaret Platformu",
      description: "Next.js ile geliştirilen modern bir e-ticaret platformu.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center p-4">
        <h1 className="text-4xl font-extrabold text-center mt-40">
          Welcome to <span className="text-blue-500">My Work</span>
        </h1>
        <p className="text-lg text-gray-400 mt-4 text-center max-w-2xl">
          Burada geliştirdiğim projelerden bazılarını bulabilirsiniz. Her proje,
          yazılım geliştirme tutkumun bir yansımasıdır.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-6 bg-gray-800 border border-gray-700 rounded-lg shadow hover:shadow-lg transition hover:bg-gray-700"
            >
              <h2 className="text-2xl font-bold text-blue-500">
                {project.title}
              </h2>
              <p className="text-gray-400 mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MyWork;

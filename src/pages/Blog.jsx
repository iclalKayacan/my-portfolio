import Header from "../components/Header";
import Footer from "../components/Footer";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "React ile Başlangıç",
      summary: "React öğrenme yolculuğum.",
    },
    {
      id: 2,
      title: "Tailwind CSS ile Tasarım",
      summary: "Hızlı ve güzel tasarımlar.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center p-4">
        <h1 className="text-4xl font-extrabold text-center mt-40">
          Welcome to <span className="text-blue-500">My Blog</span>
        </h1>
        <p className="text-lg text-gray-400 mt-4 text-center max-w-2xl">
          Burada React, Tailwind CSS ve diğer web geliştirme konularındaki
          yolculuğumu paylaşacağım yazıları bulabilirsiniz.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {posts.map((post) => (
            <div
              key={post.id}
              className="p-6 bg-gray-800 border border-gray-700 rounded-lg shadow hover:shadow-lg transition hover:bg-gray-700"
            >
              <h2 className="text-2xl font-bold text-blue-500">{post.title}</h2>
              <p className="text-gray-400 mt-2">{post.summary}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blog;

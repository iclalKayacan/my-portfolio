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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-4">
        <h1 className="text-2xl font-bold">Blog</h1>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="p-4 border border-gray-200 rounded shadow hover:shadow-lg"
            >
              <h2 className="text-xl font-bold">{post.title}</h2>
              <p className="text-gray-600">{post.summary}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;

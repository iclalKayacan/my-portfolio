import React from "react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Become a Better Designer",
      description: "Discover tips and tricks for improving your design skills.",
      image: "/assets/designer.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Mastering Web Development",
      description:
        "Explore the latest technologies and frameworks for web development.",
      image: "/assets/webdevo.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Creative Problem Solving",
      description:
        "Learn how to think outside the box for innovative solutions.",
      image: "/assets/solving.jpg",
      link: "#",
    },
  ];

  return (
    <section
      id="blog"
      className="py-32 bg-[#111111] text-gray-100 px-4 lg:px-16"
    >
      <h2 className="text-4xl font-bold text-center mb-14">BLOG</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-600  rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">{post.title}</h3>
              <p className="text-gray-400 mb-6">{post.description}</p>
              <a
                href={post.link}
                className="text-black hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;

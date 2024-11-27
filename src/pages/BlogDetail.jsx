import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();

  // Sayfa açıldığında en üste kaydırma
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // "Yukarı Çık" butonu için state
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Örnek blog post verisi
  const blogPosts = [
    {
      id: 1,
      title: "How to Become a Better Designer",
      description: "Discover tips and tricks for improving your design skills.",
      image: "/assets/designer.jpg",
      content: `
        Becoming a better designer is a journey that requires dedication and practice.
        Here are some tips to improve your design skills:
        
        1. **Understand Your Audience:** The first step in creating great designs is knowing your target audience. Research their preferences, needs, and behaviors.
        
        2. **Stay Updated:** Design trends evolve constantly. Follow design blogs, attend webinars, and engage with other designers to stay ahead.
        
        3. **Practice Daily:** Set aside time each day to experiment with new tools, techniques, and concepts. Practice makes perfect!
        
        4. **Seek Feedback:** Share your work with peers and mentors for constructive criticism. Learning from others is invaluable.

        Always remember, creativity thrives in an open mind. Take breaks, stay inspired, and don't be afraid to take risks in your designs.
      `,
    },
    {
      id: 2,
      title: "Mastering Web Development",
      description:
        "Explore the latest technologies and frameworks for web development.",
      image: "/assets/webdevo.jpg",
      content: `
        Web development is an ever-changing field. Here's how you can master it:
        
        1. **Learn the Fundamentals:** Start with HTML, CSS, and JavaScript. These are the building blocks of the web.
        
        2. **Explore Frameworks:** Frameworks like React, Angular, and Vue.js can help you build dynamic and responsive web applications.
        
        3. **Version Control:** Learn Git and GitHub to collaborate effectively and track your code changes.
        
        4. **Backend Skills:** Enhance your knowledge with backend technologies like Node.js, Express, or Django.

        5. **Practice and Projects:** Build real-world projects to solidify your skills. Portfolio-worthy projects are a great way to showcase your expertise.
      `,
    },
    {
      id: 3,
      title: "Creative Problem Solving",
      description:
        "Learn how to think outside the box for innovative solutions.",
      image: "/assets/solving.jpg",
      content: `
        Problem-solving is a skill that can set you apart in any field. Here's how to master it:
        
        1. **Define the Problem:** Clearly understanding the problem is half the battle won.
        
        2. **Brainstorm Solutions:** Gather your team and brainstorm multiple solutions. No idea is too small or too silly.
        
        3. **Prototype and Test:** Implement the best ideas as prototypes. Test them thoroughly to identify potential pitfalls.
        
        4. **Iterate:** Based on feedback, improve your solution continuously.

        Remember, the best solutions come from a collaborative and open-minded approach.
                Remember, the best solutions come from a collaborative and open-minded approach.

      `,
    },
  ];

  const post = blogPosts.find((blog) => blog.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <h1 className="text-3xl font-bold">Blog not found!</h1>
      </div>
    );
  }

  return (
    <section className="min-h-screen py-16 px-6 lg:px-32 bg-black text-gray-100">
      <h1 className="text-5xl font-bold mb-8">{post.title}</h1>
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-96 object-cover mb-12 rounded-lg shadow-md"
      />
      <div className="text-lg leading-relaxed whitespace-pre-line text-gray-300">
        {post.content}
      </div>

      {/* Yukarı Çık Butonu */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-white text-black w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition"
        >
          ↑
        </button>
      )}
    </section>
  );
};

export default BlogDetail;

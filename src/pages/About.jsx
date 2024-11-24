import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
    {/* Header */}
    <Header />

    {/* Main Content */}
    <main className="flex-grow flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-4xl font-extrabold">
        About <span className="text-blue-500">Me</span>
      </h1>
      <p className="text-lg text-gray-400 mt-4 max-w-2xl">
        Merhaba, ben İclal! Frontend geliştirme ile ilgileniyorum ve React ile
        projeler yapmayı seviyorum. Web geliştirme yolculuğumda yeni
        teknolojiler öğrenmeye ve yaratıcı çözümler geliştirmeye devam ediyorum.
      </p>
    </main>

    {/* Footer */}
    <Footer />
  </div>
);

export default About;

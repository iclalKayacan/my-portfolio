import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow p-4">
      <h1 className="text-2xl font-bold">About Me</h1>
      <p className="mt-4">
        Merhaba, ben İclal! Frontend geliştirme ile ilgileniyorum ve React ile
        projeler yapmayı seviyorum.
      </p>
    </main>
    <Footer />
  </div>
);

export default About;

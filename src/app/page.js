import Image from "next/image";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import About from "../../components/About";
import Services from "../../components/Services";
import Blog from "../../components/Blog";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Services />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

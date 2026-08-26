import Hero from "../components/Hero";
import About from "../components/About";
import Menu from "../components/Menu";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
}

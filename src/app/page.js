import Navbar from "@/component/navbar/Navbar";
import Hero from "@/component/hero/Hero";
import About from "@/component/about/About";


export default function Home() {
  return (
    <div className="w-screen scroll-smooth">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="tentang-kami">
        <About />
      </div>
    </div>
  );
}

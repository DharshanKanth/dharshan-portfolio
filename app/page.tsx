import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import InfraVisualization from "@/components/sections/InfraVisualization";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Toolchain from "@/components/sections/Toolchain";
import GitHubDashboard from "@/components/sections/GitHubDashboard";
import Certifications from "@/components/sections/Certifications";
import Leadership from "@/components/sections/Leadership";
import ResumeCTA from "@/components/sections/ResumeCTA";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <InfraVisualization />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Toolchain />
      <GitHubDashboard />
      <Certifications />
      <Leadership />
      <ResumeCTA />
      <Contact />
      <Footer />
    </main>
  );
}

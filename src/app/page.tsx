"use client";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Welcome from "../components/Welcome";

export default function RootLayout() {
  return (
    <div>
      <Header />

      <Welcome />

      <About />

      <Projects />

      <Contact />

      <Footer />
    </div>
  );
}

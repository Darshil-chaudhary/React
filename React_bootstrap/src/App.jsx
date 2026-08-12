import CustomNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import HugeCollection from "./components/HugeCollection";
import NavigationSection from "./components/NavigationSection";
import Technology from "./components/Technology";
import Support from "./components/Support";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <CustomNavbar />
      <Hero />
      <Stats />
      <Features />
      <HugeCollection />
      <NavigationSection />
      <Technology />
      <Support />
      <Footer />
    </>
  );
}

export default App;
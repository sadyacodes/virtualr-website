// src/App.jsx

import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection"; 
import Certifications from "./components/Certifications"; // NEW IMPORT
import Capabilities from "./components/Capabilities";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import TrustedPartners from "./components/TrustedPartners";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Certifications /> {/* ADDED HERE: Hero ke turant baad */}
      <Capabilities />
      <Workflow />
      <Pricing />
      <TrustedPartners />
      <Footer />
    </>
  );
}

export default App;
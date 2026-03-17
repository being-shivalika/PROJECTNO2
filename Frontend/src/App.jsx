import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FilterBar from "./components/FilterBar";
import PropertyGrid from "./components/PropertyGrid";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import InquiryForm from "./components/InquiryForm";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <Hero />
      <FilterBar />
      <PropertyGrid />
      <Services />
      <Stats />
      <Testimonials />
      <CTA />
      <InquiryForm />
      <Footer />
    </div>
  );
}

export default App;

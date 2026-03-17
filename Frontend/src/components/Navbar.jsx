import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <div className="text-xl font-semibold tracking-wide">Horizon</div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="hover:text-gray-600 transition">
            Properties
          </a>
          <a href="#" className="hover:text-gray-600 transition">
            Mortgage
          </a>
          <a href="#" className="hover:text-gray-600 transition">
            Company
          </a>
          <a href="#" className="hover:text-gray-600 transition">
            Blog
          </a>
        </div>

        {/* CTA Button */}
        <div>
          <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition">
            Book a call
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

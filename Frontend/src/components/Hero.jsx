const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        alt="Luxury Home"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-white">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
          Find a place you will call home
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
          Discover premium properties tailored to your lifestyle and budget.
        </p>

        <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
          Book a Call
        </button>
      </div>
    </section>
  );
};

export default Hero;

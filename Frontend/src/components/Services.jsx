const Services = () => {
  const services = [
    {
      title: "Property Selection",
      desc: "We help you find properties that match your needs and budget.",
    },
    {
      title: "Consultation",
      desc: "Expert guidance to make informed real estate decisions.",
    },
    {
      title: "Documentation",
      desc: "We handle all legal paperwork for a smooth transaction.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold">How We Help You</h2>
        <p className="text-gray-500 mt-2">
          Simple process designed to make property buying easier
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((item, index) => (
          <div
            key={index}
            className="p-6 border rounded-2xl hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

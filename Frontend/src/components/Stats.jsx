const Stats = () => {
  const stats = [
    { number: "500+", label: "Properties Sold" },
    { number: "200+", label: "Happy Clients" },
    { number: "10+", label: "Cities Covered" },
    { number: "5+", label: "Years Experience" },
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((item, index) => (
          <div key={index}>
            <h3 className="text-3xl font-semibold">{item.number}</h3>
            <p className="text-sm text-gray-300 mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;

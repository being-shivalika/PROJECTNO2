const Testimonials = () => {
  const reviews = [
    {
      name: "John Carter",
      text: "They helped me find the perfect home within my budget. The process was smooth and professional.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sophia Lee",
      text: "Excellent service and great communication. Highly recommended for property buyers.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Michael Smith",
      text: "Very reliable team. They handled everything from search to documentation seamlessly.",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold">What Our Clients Say</h2>
        <p className="text-gray-500 mt-2">
          Real experiences from people who trusted us
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="p-6 border rounded-2xl hover:shadow-lg transition"
          >
            <p className="text-gray-600 text-sm mb-4">"{item.text}"</p>

            <div className="flex items-center gap-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-10 rounded-full"
              />
              <h4 className="text-sm font-medium">{item.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

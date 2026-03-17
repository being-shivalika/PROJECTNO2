import PropertyCard from "./PropertyCard";

const PropertyGrid = () => {
  const properties = [
    {
      id: 1,
      title: "Serenity Villa",
      price: "$450,000",
      location: "California, USA",
      beds: 3,
      baths: 2,
      area: 1800,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      id: 2,
      title: "Modern Glass House",
      price: "$620,000",
      location: "Los Angeles, USA",
      beds: 4,
      baths: 3,
      area: 2400,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    },
    {
      id: 3,
      title: "Luxury Penthouse",
      price: "$980,000",
      location: "New York, USA",
      beds: 5,
      baths: 4,
      area: 3200,
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-3xl font-semibold">Featured Properties</h2>
        <p className="text-gray-500 mt-2">
          Explore our handpicked premium listings
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
};

export default PropertyGrid;

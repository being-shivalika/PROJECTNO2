const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300">
      {/* Image */}
      <div className="h-60 w-full overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Title */}
        <h3 className="text-lg font-semibold">{property.title}</h3>

        {/* Price */}
        <p className="text-black font-bold">{property.price}</p>

        {/* Location */}
        <p className="text-gray-500 text-sm">{property.location}</p>

        {/* Details */}
        <div className="flex gap-4 text-sm text-gray-600 pt-2">
          <span>{property.beds} Beds</span>
          <span>{property.baths} Baths</span>
          <span>{property.area} sqft</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

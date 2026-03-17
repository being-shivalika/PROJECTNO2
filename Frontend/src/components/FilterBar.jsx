const FilterBar = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12 -mt-10 relative z-20">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        {/* Tabs */}
        <div className="flex gap-4 mb-4">
          <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
            Buy
          </button>
          <button className="text-gray-600 px-4 py-2 text-sm">Rent</button>
          <button className="text-gray-600 px-4 py-2 text-sm">New</button>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
          <select className="border rounded-lg px-3 py-2 text-sm">
            <option>Location</option>
            <option>New York</option>
            <option>California</option>
          </select>

          <select className="border rounded-lg px-3 py-2 text-sm">
            <option>Property Type</option>
            <option>Villa</option>
            <option>Apartment</option>
          </select>

          <select className="border rounded-lg px-3 py-2 text-sm">
            <option>Price</option>
            <option>$100k - $300k</option>
            <option>$300k - $700k</option>
          </select>

          <select className="border rounded-lg px-3 py-2 text-sm">
            <option>Size</option>
            <option>1000 sqft</option>
            <option>2000 sqft</option>
          </select>

          <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;

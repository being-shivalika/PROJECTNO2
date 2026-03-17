const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Horizon</h2>
          <p className="text-sm text-gray-600">
            Helping you find the perfect property with ease and trust.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-medium mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#">Properties</a>
            </li>
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-medium mb-2">Contact</h3>
          <p className="text-sm text-gray-600">Email: info@horizon.com</p>
          <p className="text-sm text-gray-600">Phone: +1 234 567 890</p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8">
        © 2026 Horizon. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

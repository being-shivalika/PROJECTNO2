import { useState } from "react";

const InquiryForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", form);

    // Later: integrate EmailJS / API here

    alert("Inquiry submitted!");

    setForm({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="max-w-4xl mx-auto px-6 md:px-12 py-16">
      <div className="bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="border rounded-lg px-4 py-3 text-sm focus:outline-none"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="border rounded-lg px-4 py-3 text-sm focus:outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="border rounded-lg px-4 py-3 text-sm focus:outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Requirement (optional)"
            value={form.message}
            onChange={handleChange}
            rows="4"
            className="border rounded-lg px-4 py-3 text-sm focus:outline-none"
          />

          <button
            type="submit"
            className="bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default InquiryForm;

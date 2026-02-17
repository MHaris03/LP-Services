import { Mail, Map, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Contact Us
      </h1>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info + Map */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-4">
              Have questions or need a free estimate? Reach out to us via phone, email, or the form below.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-semibold text-indigo-600">
                  <Phone />
                </span>
                <span>+1 406-698-1112</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-indigo-600">
                  <Mail />
                </span>
                <span>leroylpservices@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-indigo-600">
                  <Map />
                </span>
                <span>Billings, MT 59101</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg h-96">
            <iframe
              title="LP Services Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d70373.16687622514!2d-108.5636845!3d45.7819194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x495136ad9b01db9%3A0x135308802113d165!2sLP%20Services%20Hauling%20%26%20Installing!5e1!3m2!1sen!2s!4v1771352846807!5m2!1sen!2s"
              className="w-full h-full"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>

          {submitted && (
            <div className="bg-green-100 text-green-800 p-3 rounded mb-4">
              Your message has been sent! We'll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

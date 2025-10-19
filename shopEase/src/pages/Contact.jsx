import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(`Thank you for your message, ${formData.name}! We'll get back to you soon.`);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "shopease@gmail.com",
      subtext: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+250 789 305 697",
      subtext: "Mon-sat from 8am to 9pm"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "Kigali-Rwanda",
      subtext: "KK 509 Street"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 8am - 9pm",
      subtext: "Sat: 8am - 5pm"
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Have a question or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <info.icon className="h-6 w-6 text-indigo-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    <p className="text-gray-900">{info.details}</p>
                    <p className="text-sm text-gray-500">{info.subtext}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-8 ">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-1 focus:ring-indigo-500  transition-shadow"
                  placeholder="your names"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-shadow"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-input  focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-shadow resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-500 hover:bg-indigo-700 text-white py-3 rounded-full font-semibold transition-colors items-center"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

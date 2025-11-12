import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark-blue mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for your construction needs
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Info - Left Column with Dark Background */}
            <div className="relative bg-gradient-to-br from-primary-dark-blue to-primary-darker-blue text-white p-8 lg:p-12 overflow-hidden">
            {/* Background Image with Blur */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80)',
                filter: 'blur(3px)',
                opacity: 0.4,
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary-dark-blue/80 to-primary-darker-blue/85"></div>
            
            {/* Content */}
            <div className="relative z-10 space-y-8">
              <div className="flex items-start">
                <div className="text-primary-cyan text-3xl mr-4 mt-1">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-white">
                    Address
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Mada Center 8th floor, 379 Hudson St,<br />
                    New York, NY 10018 US
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-primary-cyan text-3xl mr-4 mt-1">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-white">
                    Lets Talk
                  </h4>
                  <p className="text-primary-cyan text-lg font-medium">+1 800 1236879</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-primary-cyan text-3xl mr-4 mt-1">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-white">
                    General Support
                  </h4>
                  <p className="text-primary-cyan text-lg font-medium">contact@example.com</p>
                </div>
              </div>
              <div className="w-full h-64 rounded-xl overflow-hidden border border-gray-200 shadow-inner">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184132576576!2d-73.98811768459398!3d40.75889597932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Baakkel Group Location"
                ></iframe>
                </div>
            </div>
          </div>

            {/* Contact Form - Right Column */}
            <div className="bg-white p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-primary-dark-blue mb-8">
              Send Us A Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields - Side by Side */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide"
                >
                  Tell Us Your Name <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-cyan focus:border-primary-cyan outline-none transition-all duration-300"
                    placeholder="First name"
                  />
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-cyan focus:border-primary-cyan outline-none transition-all duration-300"
                    placeholder="Last name"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide"
                >
                  Enter Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-cyan focus:border-primary-cyan outline-none transition-all duration-300"
                  placeholder="Eg. example@email.com"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide"
                >
                  Enter Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-cyan focus:border-primary-cyan outline-none transition-all duration-300"
                  placeholder="Eg. +1 800 000000"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-cyan focus:border-primary-cyan outline-none resize-none transition-all duration-300"
                  placeholder="Write us a message"
                ></textarea>
              </div>

              {/* Submit Button - Green */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-cyan to-primary-teal hover:from-primary-teal hover:to-primary-cyan text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                SEND MESSAGE
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


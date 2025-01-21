import React from 'react'


    const Footer = () => {
        return (
          <footer className="bg-red-600 text-black py-8">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {/* Column 1: Quick Links */}
                <div>
                  <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                  <ul>
                    <li><a href="/" className="hover:underline">Home</a></li>
                    <li><a href="/about" className="hover:underline">About Us</a></li>
                    <li><a href="/products" className="hover:underline">Products</a></li>
                    <li><a href="/contact" className="hover:underline">Contact Us</a></li>
                  </ul>
                </div>
      
                {/* Column 2: Contact Information */}
                <div>
                  <h3 className="font-semibold text-lg mb-4">Contact</h3>
                  <ul>
                    <li>Email: <a href="mailto:support@walyasgotisoda.com" className="hover:underline">support@walyasgotisoda.com</a></li>
                    <li>Phone: <a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a></li>
                    <li>Address: 123 Soda St, Refreshment City, RC 12345</li>
                  </ul>
                </div>
      
                {/* Column 3: Social Media */}
                <div>
                  <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="https://facebook.com" className="hover:text-blue-500">
                      <i className="fab fa-facebook-f"></i> {/* Replace with actual icon */}
                    </a>
                    <a href="https://instagram.com" className="hover:text-pink-500">
                      <i className="fab fa-instagram"></i> {/* Replace with actual icon */}
                    </a>
                    <a href="https://twitter.com" className="hover:text-blue-400">
                      <i className="fab fa-twitter"></i> {/* Replace with actual icon */}
                    </a>
                    <a href="https://linkedin.com" className="hover:text-blue-700">
                      <i className="fab fa-linkedin-in"></i> {/* Replace with actual icon */}
                    </a>
                  </div>
                </div>
      
                {/* Column 4: Newsletter */}
                <div>
                  <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
                  <p>Subscribe to get the latest news and updates.</p>
                  <form className="mt-4">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full p-2 rounded-lg text-black"
                    />
                    <button
                      type="submit"
                      className="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-black p-2 rounded-lg"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
      
              {/* Copyright Section */}
              <div className="text-center mt-8">
                <p className="text-sm">&copy; 2025 Walyas Goti Soda. All rights reserved.</p>
              </div>
            </div>
          </footer>
        );
      };
      
      export default Footer;
      
  
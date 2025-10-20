import { Link } from "react-router-dom";
import { ShoppingBag, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-indigo-50 mt-20 border-t border-border text-indigo-500">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8 text-center md:text-left">
          {/* Brand Section */}
          <div className="space-y-4 flex-1">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <div className="bg-gradient-to-r from-indigo-500 to-violet-500 p-2 rounded-lg transition-transform group-hover:scale-110">
                <ShoppingBag className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                𝐒hopease
              </span>
            </div>
            <p className="text-sm text-gray-500 max-w-xs mx-auto md:mx-0">
              Your one-stop shop for <br /> quality products at amazing prices.
            </p>
          </div>
          {/* Quick Links */}
          <div className="flex-1">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-500 hover:text-indigo-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-gray-500 hover:text-indigo-500">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-500 hover:text-indigo-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-500 hover:text-indigo-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-1">
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start space-x-2 text-sm text-gray-500">
                <Mail className="h-4 w-4" />
                <span>shopease@gmail.com</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2 text-sm text-gray-500">
                <Phone className="h-4 w-4" />
                <span>+250 789 305 697</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2 text-sm text-gray-500">
                <MapPin className="h-4 w-4" />
                <span>KK 509 Street</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t  mt-8 pt-8 text-center  text-indigo-500">
          <p>&copy; 2025 𝐒hopease. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

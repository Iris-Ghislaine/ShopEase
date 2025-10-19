import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-indigo-50 fixed w-full shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-r from-indigo-500 to-violet-500 p-2 rounded-lg transition-transform group-hover:scale-110">
              <ShoppingBag className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              𝐒hopease
            </span>
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-indigo-500 font-medium text-lg">
              Home
            </Link>
            <Link to="/products" className="hover:text-indigo-500 font-medium text-lg">
              Products
            </Link>
            <Link to="/about" className="hover:text-indigo-500 font-medium text-lg">
              About
            </Link>
            <Link to="/contact" className="hover:text-indigo-500 font-medium text-lg">
              Contact
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-indigo-600 hover:text-indigo-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-indigo-50 border-t border-gray-200 shadow-sm">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-indigo-500 font-medium text-lg"
            >
              Home
            </Link>
            <Link
              to="/products"
              onClick={() => setIsOpen(false)}
              className="hover:text-indigo-500 font-medium text-lg"
            >
              Products
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-indigo-500 font-medium text-lg"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-indigo-500 font-medium text-lg"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

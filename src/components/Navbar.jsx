import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-indigo-600 font-bold text-lg"
      : "text-gray-700 hover:text-indigo-500 font-medium text-lg";

  return (
    <nav className="bg-indigo-50 fixed w-full shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <NavLink to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-r from-indigo-500 to-violet-500 p-2 rounded-lg transition-transform group-hover:scale-110">
              <ShoppingBag className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              𝐒hopease
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={linkClasses}>Home</NavLink>
            <NavLink to="/products" className={linkClasses}>Products</NavLink>
            <NavLink to="/about" className={linkClasses}>About</NavLink>
            <NavLink to="/contact" className={linkClasses}>Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-indigo-600 hover:text-indigo-800 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
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
            <NavLink to="/" onClick={() => setIsOpen(false)} className={linkClasses}>Home</NavLink>
            <NavLink to="/products" onClick={() => setIsOpen(false)} className={linkClasses}>Products</NavLink>
            <NavLink to="/about" onClick={() => setIsOpen(false)} className={linkClasses}>About</NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)} className={linkClasses}>Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

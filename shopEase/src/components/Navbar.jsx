import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-indigo-50 fixed shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-r from-indigo-500 to-violet-500 p-2 rounded-lg transition-transform group-hover:scale-110">
              <ShoppingBag className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              𝐒hopease
            </span>
          </Link>

          <div className="flex items-center space-x-8">
            <Link to="/" className="hover:text-indigo-500  font-medium  text-lg">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

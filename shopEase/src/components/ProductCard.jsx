import { ShoppingCart } from "lucide-react";

const ProductCard = ({ image, name, price, category }) => {
  const handleAddToCart = () => {
    console.log(`Added ${name} to cart`);
    alert(`${name} has been added to your cart!`);
  };

  return (
    <div className="bg-indigo-50 rounded-xl overflow-hidden shadow-sm hover:shadow-white transition-all duration-300 group">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {category && (
          <span className="absolute top-3 left-3 bg-indigo-500 text-indigo-500-foreground text-xs font-semibold px-3 py-1 rounded-full">
            {category}
          </span>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2 text-card-foreground group-hover:text-indigo-500 transition-colors">
          {name}
        </h3>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-indigo-500">${price}</span>
          
          <button
            onClick={handleAddToCart}
            className="bg-indigo-500 hover:bg-indigo-400  px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors"
          >
            <ShoppingCart className="h-4 w-4 text-white" />
            <span className="text-white">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

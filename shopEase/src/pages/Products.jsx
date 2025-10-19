import { useState } from "react";
import ProductCard from "../components/ProductCard";


const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const data =[
  { id: 1, name: 'mac book', price: 999, image: 'src/assets/macbook.jpg', category: 'Electronics' },
  { id: 2, name: 'Wireless Headphones', price: 149, image: 'src/assets/officialheadset.jpg', category: 'Electronics' },
  { id: 3, name: 'samsung S25', price: 799, image: 'src/assets/samsung.jpg', category: 'Electronics' },
  { id: 4, name: 'Cotton Shirt', price: 29, image: 'src/assets/realtshirts.jpg', category: 'Fashion' },
  { id: 5, name: 'Slim Jeans', price: 59, image: 'src/assets/slimjeans.jpg', category: 'Fashion' },
  { id: 6, name: 'Summer Outfit', price: 45, image: 'src/assets/dress.jpg', category: 'Fashion' },
  { id: 7, name: ' Watch', price: 199, image: 'src/assets/watch2.jpg', category: 'Accessories' },
  { id: 8, name: 'earings', price: 10, image: 'src/assets/earings.jpg', category: 'Accessories' },
];
  
  // for getting category per category
  const categories = ["All", ...new Set(data.map(p => p.category))];

  // Filter products based on selected category
  const filteredProducts = selectedCategory === "All" 
    ? data 
    : data.filter(p => p.category === selectedCategory);

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Browse our complete collection of quality products across all categories
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-indigo-500 text-white shadow-lg scale-105"
                  : "bg-muted text-foreground hover:bg-primary/10 hover:scale-105"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            {selectedCategory === "All" ? "All Products" : selectedCategory}
          </h2>
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

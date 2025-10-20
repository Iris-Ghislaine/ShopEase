import HeroSection from "../components/HeroSection";
import { Zap, Shield, Truck } from "lucide-react";
import ProductCard from "../components/ProductCard";

const Home = () => {
    const featuredProducts = [
  { id: 1, name: 'mac book', price: 999, image: 'assets/macbook.jpg', category: 'Electronics' },
  { id: 2, name: 'Wireless Headphones', price: 149, image: 'assets/officialheadset.jpg', category: 'Electronics' },
  { id: 3, name: 'samsung S25', price: 799, image: 'assets/samsung.jpg', category: 'Electronics' },
  { id: 4, name: 'Cotton Shirt', price: 29, image: 'assets/realtshirts.jpg', category: 'Fashion' },
  { id: 5, name: 'Slim Jeans', price: 59, image: 'assets/slimjeans.jpg', category: 'Fashion' },
  { id: 6, name: 'Summer Outfit', price: 45, image: 'assets/dress.jpg', category: 'Fashion' },
  { id: 7, name: ' Watch', price: 199, image: 'assets/watch2.jpg', category: 'Accessories' },
  { id: 8, name: 'earings', price: 10, image: 'assets/earings.jpg', category: 'Accessories' },
];

  return (
    <div>
      <HeroSection />
      {/* Features Section */}
      <section className="py-12 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="bg-indigo-500/10 p-4 rounded-full">
                <Truck className="h-8 w-8 text-indigo-500" />
              </div>
              <h3 className="font-semibold text-lg">Free Shipping</h3>
              <p className="text-sm text-gray-500">On orders over $50</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="bg-indigo-500/10 p-4 rounded-full">
                <Shield className="h-8 w-8 text-indigo-500" />
              </div>
              <h3 className="font-semibold text-lg">Secure Payment</h3>
              <p className="text-sm text-gray-500">100% secure transactions</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="bg-indigo-500/10 p-4 rounded-full">
                <Zap className="h-8 w-8 text-indigo-500" />
              </div>
              <h3 className="font-semibold text-lg">Fast Delivery</h3>
              <p className="text-sm text-gray-500">2-3 business days</p>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto">
              Check out our handpicked selection of trending items
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

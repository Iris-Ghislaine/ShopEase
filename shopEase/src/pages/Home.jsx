import HeroSection from "../components/HeroSection";
import { Zap, Shield, Truck } from "lucide-react";

const Home = () => {
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

    </div>
  );
};

export default Home;

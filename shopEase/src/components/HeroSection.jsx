import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-violet-500 py-20 md:py-49 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Discover Amazing Products at Unbeatable Prices
          </h1>  
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Shop the latest trends in electronics, fashion, and accessories. Quality you can trust, prices you'll love.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/products"
              className="bg-white text-indigo-500 hover:bg-white/90 px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 transition-all shadow-lg hover:shadow-xl group"
            >
              <span>Shop Now</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/about"
              className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-4 rounded-lg font-semibold transition-all border-2 border-white/30"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

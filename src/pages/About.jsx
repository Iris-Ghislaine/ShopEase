import { Target, Users, Award, Heart } from "lucide-react";

const About = () => {
  const reasons = [
    {
      icon: Target,
      title: "Quality First",
      description: "We handpick every product to ensure the highest quality standards for our customers."
    },
    {
      icon: Users,
      title: "Customer Focused",
      description: "Your satisfaction is our priority. We're here to help you every step of the way."
    },
    {
      icon: Award,
      title: "Best Prices",
      description: "Competitive pricing without compromising on quality. Great deals, always."
    },
    {
      icon: Heart,
      title: "Trusted Brand",
      description: "Join thousands of happy customers who trust ShopHub for their shopping needs."
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About 𝐒hopease</h1>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            We're on a mission to make online shopping simple, affordable, and enjoyable for everyone.
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-indigo-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-500">
              <p>
                Founded in 2023, 𝐒hopease started with a simple idea: to create an online shopping 
                experience that puts customers first. We believe that everyone deserves access to 
                quality products at fair prices.
              </p>
              <p>
                What began as a small startup has grown into a trusted destination for shoppers 
                looking for electronics, fashion, and accessories. Our commitment to excellence 
                and customer satisfaction has helped us build a community of loyal customers.
              </p>
              <p>
                Today, we continue to expand our product range while maintaining the same values 
                that guided us from day one: quality, affordability, and exceptional service.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <reason.icon className="h-6 w-6 text-indigo-500" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
                <p className="text-sm text-gray-500">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-indigo-500 to-violet-500 transition-transform rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg max-w-3xl mx-auto">
            To provide an exceptional online shopping experience by offering a carefully curated 
            selection of quality products, competitive prices, and outstanding customer service 
            that exceeds expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

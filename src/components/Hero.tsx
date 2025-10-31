import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.png";

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1D1B1B]/90 via-[#1D1B1B]/70 to-transparent" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-center pt-8 px-4">
        <div className="flex gap-4">
          <Button variant="glass" size="lg" className="min-w-[140px]">
            Login
          </Button>
          <Button variant="glass" size="lg" className="min-w-[140px]">
            Register
          </Button>
          <Button variant="hero" size="lg" className="min-w-[180px]">
            Go to Marketplace
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-start justify-center min-h-[calc(100vh-120px)] px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            Fabric<span className="text-[#2596be]">Stock</span>Hub
          </h1>
          
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-white/90">
              Welcome to the Future of Fabric Logistics
            </h2>
            
            <p className="text-lg md:text-xl text-[#D9D9D9] leading-relaxed max-w-2xl">
              FSHub is your comprehensive platform for managing fabric inventory, 
              tracking logistics, and coordinating transportation and warehousing operations. 
              Streamline your supply chain with real-time visibility and intelligent management tools.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <Button size="lg" variant="hero" className="text-lg px-8 py-6 h-auto">
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="glass" 
                className="text-lg px-8 py-6 h-auto"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1D1B1B] to-transparent z-0" />
    </div>
  );
};

export default Hero;

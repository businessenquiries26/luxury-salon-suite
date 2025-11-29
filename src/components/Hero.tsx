import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 parallax-section"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2074')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in">
          Where Luxury Meets Artistry
        </h1>
        <p className="text-lg md:text-xl mb-8 font-light tracking-wide max-w-2xl mx-auto">
          Experience premium hair care and botanical therapy at our five exclusive locations
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => navigate("/booking")}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-luxury-black font-semibold text-lg px-8 py-6"
          >
            Book Your Experience
          </Button>
          <Button
            onClick={() => navigate("/services")}
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-luxury-black font-semibold text-lg px-8 py-6"
          >
            Explore Services
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

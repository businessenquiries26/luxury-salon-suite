import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LocationCard from "@/components/LocationCard";
import { locations } from "@/data/locations";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Elevated Guest Care
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            At Luxe Salon, we believe in the transformative power of botanical therapy 
            combined with artistic excellence. Our master stylists are trained in the 
            latest cutting-edge techniques, ensuring every guest leaves feeling 
            refreshed, renewed, and radiantly confident.
          </p>
          <Button
            onClick={() => navigate("/services")}
            size="lg"
            variant="outline"
            className="border-2"
          >
            Discover Our Services
          </Button>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-luxury-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Our Signature Services
            </h2>
            <p className="text-lg text-muted-foreground">
              From precision cuts to botanical color therapy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Precision Cuts",
                description: "Master stylist consultations with personalized cutting techniques",
                image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=400",
              },
              {
                title: "Color Artistry",
                description: "Balayage, highlights, and full color transformations using botanical formulas",
                image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=400",
              },
              {
                title: "Botanical Therapy",
                description: "Deep conditioning treatments with organic Aveda products",
                image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=400",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="glass-card rounded-lg overflow-hidden hover:shadow-elevated transition-all duration-500 group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => navigate("/services")}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-luxury-black"
            >
              View Full Service Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Our Locations
            </h2>
            <p className="text-lg text-muted-foreground">
              Five luxurious salons across the Dallas metroplex
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-luxury-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Transform Your Look?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Book your appointment today and experience the difference of luxury salon care
          </p>
          <Button
            onClick={() => navigate("/booking")}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-luxury-black text-lg px-12 py-6"
          >
            Book Your Experience
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-luxury-charcoal text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-serif font-bold mb-4">Luxe Salon</h3>
          <p className="text-sm opacity-80 mb-6">
            Where luxury meets artistry. Experience botanical beauty therapy across our five exclusive locations.
          </p>
          <p className="text-xs opacity-60">
            © 2024 Luxe Salon. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

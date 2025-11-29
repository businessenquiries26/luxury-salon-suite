import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { locations } from "@/data/locations";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

const LocationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = locations.find((loc) => loc.id === id);

  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Location Not Found</h1>
          <Button onClick={() => navigate("/locations")}>
            View All Locations
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Image */}
      <div className="relative h-[50vh] mt-20 overflow-hidden">
        <img
          src={location.image}
          alt={location.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 to-transparent" />
        <div className="absolute bottom-8 left-8">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-2">
            {location.name}
          </h1>
          <p className="text-xl text-white/90">{location.description}</p>
        </div>
      </div>

      {/* Location Details */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Visit Us</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">{location.address}</p>
                    <a
                      href={location.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline flex items-center gap-1 mt-2"
                    >
                      Get Directions <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a
                      href={`tel:${location.phone}`}
                      className="text-muted-foreground hover:text-accent"
                    >
                      {location.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Hours</h3>
                    <p className="text-muted-foreground mb-1">
                      {location.hours.weekday}
                    </p>
                    <p className="text-muted-foreground">
                      {location.hours.weekend}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Button
                onClick={() => navigate(`/booking?location=${location.id}`)}
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-luxury-black"
              >
                Book at {location.name}
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="glass-card rounded-lg overflow-hidden h-[500px]">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(location.address)}`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4 bg-luxury-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">
            Salon Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-lg overflow-hidden hover:shadow-elevated transition-all"
              >
                <img
                  src={`https://images.unsplash.com/photo-${1560066984000 + i}138-dadb4c035?q=80&w=400`}
                  alt={`Gallery ${i}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationDetail;

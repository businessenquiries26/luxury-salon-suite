import Navigation from "@/components/Navigation";
import LocationCard from "@/components/LocationCard";
import { locations } from "@/data/locations";

const Locations = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden mt-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2069')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Our Locations
          </h1>
          <p className="text-xl font-light">Five luxurious salons across the Dallas metroplex</p>
        </div>
      </div>

      {/* Locations Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;

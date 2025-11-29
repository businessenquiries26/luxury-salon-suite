import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface TeamMember {
  name: string;
  title: string;
  location: string;
  specialties: string[];
  image: string;
  bio: string;
}

const Team = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>("all");

  const team: TeamMember[] = [
    {
      name: "Isabella Martinez",
      title: "Artistic Director",
      location: "Uptown Dallas",
      specialties: ["Balayage", "Color Correction", "Extensions"],
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
      bio: "15+ years of experience in advanced color techniques",
    },
    {
      name: "Sophia Chen",
      title: "Master Stylist",
      location: "Frisco",
      specialties: ["Precision Cuts", "Balayage", "Bridal"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400",
      bio: "Specializing in modern bridal styling and color artistry",
    },
    {
      name: "Marcus Thompson",
      title: "Master Stylist",
      location: "Plano",
      specialties: ["Men's Cuts", "Beard Grooming", "Fade Techniques"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
      bio: "Expert in contemporary men's grooming and precision fades",
    },
    {
      name: "Olivia Park",
      title: "Extension Specialist",
      location: "Highland Park",
      specialties: ["Hand-Tied Extensions", "Tape-In", "Extension Color"],
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=400",
      bio: "Certified in advanced extension techniques and maintenance",
    },
    {
      name: "Emma Rodriguez",
      title: "Color Artist",
      location: "Knox-Henderson",
      specialties: ["Vivid Colors", "Balayage", "Ombré"],
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400",
      bio: "Creative color specialist with a passion for bold transformations",
    },
    {
      name: "Alexander Kim",
      title: "Master Stylist",
      location: "Uptown Dallas",
      specialties: ["Precision Cuts", "Styling", "Keratin Treatments"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
      bio: "Known for creating timeless, elegant styles with modern flair",
    },
  ];

  const locations = ["all", ...Array.from(new Set(team.map((m) => m.location)))];

  const filteredTeam =
    selectedLocation === "all"
      ? team
      : team.filter((m) => m.location === selectedLocation);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden mt-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Our Team
          </h1>
          <p className="text-xl font-light">Meet our master stylists and color artists</p>
        </div>
      </div>

      {/* Filter */}
      <section className="py-12 px-4 bg-luxury-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {locations.map((location) => (
              <Button
                key={location}
                onClick={() => setSelectedLocation(location)}
                variant={selectedLocation === location ? "default" : "outline"}
                className={
                  selectedLocation === location
                    ? "bg-accent hover:bg-accent/90 text-luxury-black"
                    : ""
                }
              >
                {location === "all" ? "All Locations" : location}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTeam.map((member, idx) => (
              <div
                key={idx}
                className="glass-card rounded-lg overflow-hidden hover:shadow-elevated transition-all duration-500 group"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-luxury-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-serif font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-white/90 text-sm font-medium mb-2">
                      {member.title}
                    </p>
                    <p className="text-accent text-sm">{member.location}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 text-sm">
                    {member.bio}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-accent/10 text-accent hover:bg-accent/20"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;

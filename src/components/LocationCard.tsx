import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { Location } from "@/data/locations";

interface LocationCardProps {
  location: Location;
}

const LocationCard = ({ location }: LocationCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="group glass-card rounded-lg overflow-hidden hover:shadow-elevated transition-all duration-500 hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <img
          src={location.image}
          alt={location.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/70 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-3xl font-serif font-bold text-white">
          {location.name}
        </h3>
      </div>
      
      <div className="p-6 space-y-4">
        <p className="text-muted-foreground">{location.description}</p>
        
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <span>{location.address}</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-accent flex-shrink-0" />
            <span>{location.phone}</span>
          </div>
          
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p>{location.hours.weekday}</p>
              <p>{location.hours.weekend}</p>
            </div>
          </div>
        </div>
        
        <div className="pt-4 flex gap-3">
          <Button
            onClick={() => navigate(`/locations/${location.id}`)}
            variant="outline"
            className="flex-1"
          >
            View Details
          </Button>
          <Button
            onClick={() => navigate(`/booking?location=${location.id}`)}
            className="flex-1 bg-accent hover:bg-accent/90 text-luxury-black"
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;

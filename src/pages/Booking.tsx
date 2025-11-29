import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { locations } from "@/data/locations";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const [searchParams] = useSearchParams();
  const preselectedLocation = searchParams.get("location") || "";
  
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    location: preselectedLocation,
    service: "",
    stylist: "",
    time: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Submitted",
      description: "Our reservationist team will contact you shortly to confirm your appointment.",
    });
  };

  const services = [
    "Women's Cut & Style",
    "Men's Cut",
    "Full Color",
    "Balayage",
    "Highlights",
    "Keratin Treatment",
    "Extensions",
    "Special Occasion Styling",
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
    "5:00 PM", "6:00 PM", "7:00 PM",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <div className="relative h-[30vh] flex items-center justify-center overflow-hidden mt-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Book Your Experience
          </h1>
          <p className="text-xl font-light">Your transformation awaits</p>
        </div>
      </div>

      {/* Booking Form */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-lg p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Service Selection */}
              <div className="space-y-6">
                <h2 className="text-2xl font-serif font-semibold">
                  1. Select Your Service
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Select
                      value={formData.location}
                      onValueChange={(value) =>
                        setFormData({ ...formData, location: value })
                      }
                    >
                      <SelectTrigger id="location">
                        <SelectValue placeholder="Choose a location" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((loc) => (
                          <SelectItem key={loc.id} value={loc.id}>
                            {loc.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="service">Service</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        setFormData({ ...formData, service: value })
                      }
                    >
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="stylist">Stylist Preference (Optional)</Label>
                  <Select
                    value={formData.stylist}
                    onValueChange={(value) =>
                      setFormData({ ...formData, stylist: value })
                    }
                  >
                    <SelectTrigger id="stylist">
                      <SelectValue placeholder="No preference / First available" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="no-preference">
                        No preference
                      </SelectItem>
                      <SelectItem value="isabella">Isabella Martinez</SelectItem>
                      <SelectItem value="sophia">Sophia Chen</SelectItem>
                      <SelectItem value="marcus">Marcus Thompson</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Date & Time */}
              <div className="space-y-6">
                <h2 className="text-2xl font-serif font-semibold">
                  2. Choose Date & Time
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label>Preferred Date</Label>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border mt-2 pointer-events-auto"
                      disabled={(date) => date < new Date()}
                    />
                  </div>

                  <div>
                    <Label htmlFor="time">Preferred Time</Label>
                    <Select
                      value={formData.time}
                      onValueChange={(value) =>
                        setFormData({ ...formData, time: value })
                      }
                    >
                      <SelectTrigger id="time">
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h2 className="text-2xl font-serif font-semibold">
                  3. Your Information
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(214) 555-0101"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-6">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-luxury-black text-lg"
                >
                  Submit Booking Request
                </Button>
                <p className="text-sm text-muted-foreground text-center mt-4">
                  Our guest care team will contact you within 24 hours to confirm your appointment
                </p>
              </div>
            </form>
          </div>

          {/* Info Box */}
          <div className="mt-8 p-6 bg-luxury-cream rounded-lg">
            <h3 className="font-semibold mb-2">Booking Notes:</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• A credit card deposit may be required for certain services</li>
              <li>• Please arrive 10 minutes early for your consultation</li>
              <li>• 24-hour cancellation notice is appreciated</li>
              <li>• For same-day bookings, please call your preferred location directly</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;

import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      category: "Precision Cuts",
      items: [
        { name: "Women's Cut & Style", stylist: "$75", master: "$95" },
        { name: "Men's Cut", stylist: "$45", master: "$65" },
        { name: "Bang Trim", stylist: "$20", master: "$25" },
        { name: "Child's Cut (12 & under)", stylist: "$35", master: "$45" },
      ],
    },
    {
      category: "Color Services",
      items: [
        { name: "Full Color", stylist: "$95+", master: "$125+" },
        { name: "Root Touch-Up", stylist: "$75+", master: "$95+" },
        { name: "Partial Highlights", stylist: "$115+", master: "$145+" },
        { name: "Full Highlights", stylist: "$145+", master: "$185+" },
        { name: "Balayage", stylist: "$165+", master: "$215+" },
        { name: "Color Correction", stylist: "$200+", master: "$300+" },
      ],
    },
    {
      category: "Botanical Treatments",
      items: [
        { name: "Deep Conditioning Treatment", stylist: "$45", master: "$55" },
        { name: "Keratin Smoothing Treatment", stylist: "$250+", master: "$300+" },
        { name: "Scalp Therapy Ritual", stylist: "$65", master: "$85" },
        { name: "Bond Building Treatment", stylist: "$75", master: "$95" },
      ],
    },
    {
      category: "Extensions & Enhancements",
      items: [
        { name: "Tape-In Extensions (Full Head)", stylist: "$500+", master: "$650+" },
        { name: "Hand-Tied Extensions", stylist: "$800+", master: "$1000+" },
        { name: "Extension Maintenance", stylist: "$150+", master: "$200+" },
      ],
    },
    {
      category: "Special Occasion",
      items: [
        { name: "Updo Styling", stylist: "$85+", master: "$115+" },
        { name: "Blowout & Style", stylist: "$55", master: "$75" },
        { name: "Makeup Application", stylist: "$75", master: "$95" },
        { name: "Bridal Party Package", stylist: "Custom", master: "Custom" },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden mt-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Service Menu
          </h1>
          <p className="text-xl font-light">Artistry meets botanical science</p>
        </div>
      </div>

      {/* Services Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              All services include a personalized consultation with your stylist. 
              Prices may vary based on hair length, density, and technique.
            </p>
            <div className="flex justify-center gap-8 text-sm font-semibold">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-sage" />
                <span>Stylist Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span>Master Stylist Pricing</span>
              </div>
            </div>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {services.map((category, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="glass-card rounded-lg px-6 border-none"
              >
                <AccordionTrigger className="text-2xl font-serif font-semibold hover:no-underline hover:text-accent transition-colors">
                  {category.category}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-4">
                    {category.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="flex justify-between items-center py-3 border-b border-border last:border-0"
                      >
                        <span className="font-medium">{item.name}</span>
                        <div className="flex gap-6 text-sm">
                          <span className="text-sage-dark font-semibold">
                            {item.stylist}
                          </span>
                          <span className="text-accent font-semibold">
                            {item.master}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 p-8 glass-card rounded-lg text-center">
            <h3 className="text-2xl font-serif font-semibold mb-4">
              Ready to Book Your Transformation?
            </h3>
            <p className="text-muted-foreground mb-6">
              Choose your preferred location, service, and stylist
            </p>
            <Button
              onClick={() => navigate("/booking")}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-luxury-black"
            >
              Book Your Appointment
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

export interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: {
    weekday: string;
    weekend: string;
  };
  image: string;
  mapUrl: string;
  description: string;
}

export const locations: Location[] = [
  {
    id: "uptown-dallas",
    name: "Uptown Dallas",
    address: "2501 McKinney Ave, Dallas, TX 75201",
    phone: "(214) 555-0101",
    hours: {
      weekday: "Monday - Friday: 9:00 AM - 8:00 PM",
      weekend: "Saturday - Sunday: 10:00 AM - 6:00 PM",
    },
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070",
    mapUrl: "https://maps.google.com/?q=2501+McKinney+Ave+Dallas+TX",
    description: "Our flagship location in the heart of Uptown, featuring our complete range of services and our most experienced artistic directors.",
  },
  {
    id: "frisco",
    name: "Frisco",
    address: "8588 Preston Rd, Frisco, TX 75034",
    phone: "(972) 555-0202",
    hours: {
      weekday: "Monday - Friday: 9:00 AM - 8:00 PM",
      weekend: "Saturday - Sunday: 10:00 AM - 6:00 PM",
    },
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069",
    mapUrl: "https://maps.google.com/?q=8588+Preston+Rd+Frisco+TX",
    description: "A modern oasis in Frisco with a focus on balayage artistry and botanical treatments.",
  },
  {
    id: "plano",
    name: "Plano",
    address: "7200 Bishop Rd, Plano, TX 75024",
    phone: "(469) 555-0303",
    hours: {
      weekday: "Monday - Friday: 9:00 AM - 8:00 PM",
      weekend: "Saturday - Sunday: 10:00 AM - 6:00 PM",
    },
    image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2087",
    mapUrl: "https://maps.google.com/?q=7200+Bishop+Rd+Plano+TX",
    description: "Sophisticated styling in West Plano, specializing in precision cuts and color correction.",
  },
  {
    id: "highland-park",
    name: "Highland Park",
    address: "4300 Mockingbird Ln, Dallas, TX 75205",
    phone: "(214) 555-0404",
    hours: {
      weekday: "Monday - Friday: 9:00 AM - 8:00 PM",
      weekend: "Saturday - Sunday: 10:00 AM - 6:00 PM",
    },
    image: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2070",
    mapUrl: "https://maps.google.com/?q=4300+Mockingbird+Ln+Dallas+TX",
    description: "An intimate boutique experience in prestigious Highland Park, offering exclusive VIP services.",
  },
  {
    id: "knox-henderson",
    name: "Knox-Henderson",
    address: "3699 McKinney Ave, Dallas, TX 75204",
    phone: "(214) 555-0505",
    hours: {
      weekday: "Monday - Friday: 9:00 AM - 8:00 PM",
      weekend: "Saturday - Sunday: 10:00 AM - 6:00 PM",
    },
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2069",
    mapUrl: "https://maps.google.com/?q=3699+McKinney+Ave+Dallas+TX",
    description: "Vibrant energy meets refined style in Knox-Henderson, featuring our extension and keratin specialists.",
  },
];

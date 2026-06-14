/**
 * Business information — single source of truth for NAP (Name, Address, Phone).
 * Used across the entire site for consistency and local SEO.
 */

export const BUSINESS = {
  name: "Jerin Kurian & Associates",
  legalName: "Jerin Kurian & Associates, Chartered Accountants",
  tagline: "Chartered Accountants",

  // Address
  address: {
    street: "#510, 11th A Main, Nisarga Layout, Bannerghatta Road",
    city: "Bangalore",
    state: "Karnataka",
    postalCode: "560083",
    country: "IN",
    full: "#510, 11th A Main, Nisarga Layout, Bannerghatta Road, Bangalore 560083",
  },

  // Geo
  geo: {
    latitude: 12.787696687510989,
    longitude: 77.61456477507332,
  },

  // Contact
  phone: {
    display: "+91 78925 77597",
    tel: "tel:+917892577597",
    whatsappDisplay: "+91 91645 57027",
    whatsapp: "919164557027",
  },

  // URLs
  urls: {
    site: "https://cajerinkurian.com",
    googleMaps: "https://maps.app.goo.gl/LyBJzFekqEXVyjJa6",
    googleMapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4630.526889156379!2d77.61456477507332!3d12.787696687510989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6bed8bd60573%3A0x5ff2a3fadcfb9751!2sJerin%20Kurian%20%26%20Associates%2C%20Chartered%20Accountants!5e1!3m2!1sen!2sin!4v1779811436620!5m2!1sen!2sin",
  },

  // Business hours — TODO: Owner to confirm before launch
  hours: {
    display: "Mon – Sat, 10:00 AM – 7:00 PM",
    structured: {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
  },

  // ICAI — TODO: Owner to supply Firm Registration Number (FRN)
  icai: {
    mention: "Member firm, The Institute of Chartered Accountants of India",
    frn: "FRN-XXXXXX", // TODO: Replace with actual FRN
  },

  // Founder — TODO: Owner to supply real bio and photo
  founder: {
    name: "Jerin Kurian",
    designation: "CA",
    bio: "Jerin Kurian is a Chartered Accountant and member of the Institute of Chartered Accountants of India (ICAI). He leads the firm's practice across audit, taxation, and corporate compliance.",
  },
} as const;

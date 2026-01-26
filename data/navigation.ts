export const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Shop",
    mega: true,
    categories: [
      {
        title: "Indian & Fusion Wear",
        links: [
          "Kurtas & Suits",
          "Kurtis, Tunics & Tops",
          "Sarees",
          "Ethnic Wear",
          "Jackets",
        ],
      },
      {
        title: "Western Wear",
        links: ["Dresses", "Tops", "Tshirts", "Jeans", "Co-ords"],
      },
      {
        title: "Footwear",
        links: ["Flats", "Heels", "Boots", "Sports Shoes"],
      },
      {
        title: "Gadgets",
        links: ["Smart Wearables", "Headphones", "Speakers", "Smart Phone"],
      },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Team", href: "/team" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

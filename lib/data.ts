export type Category = "tech" | "lifestyle" | "reisen" | "mode" | "fitness" | "finanzen";

export interface Deal {
  id: string;
  title: string;
  description: string;
  category: Category;
  badge?: string;
  originalPrice?: string;
  discountPrice?: string;
  discount?: string;
  affiliateUrl: string;
  featured?: boolean;
  emoji: string;
}

export const categories: { id: Category | "alle"; label: string }[] = [
  { id: "alle", label: "Alle" },
  { id: "tech", label: "Tech & Gadgets" },
  { id: "lifestyle", label: "Lifestyle" },
  { id: "reisen", label: "Reisen" },
  { id: "mode", label: "Mode" },
  { id: "fitness", label: "Fitness" },
  { id: "finanzen", label: "Finanzen" },
];

export const deals: Deal[] = [
  {
    id: "1",
    title: "Apple AirPods Pro 2",
    description: "Aktive Geräuschunterdrückung der nächsten Generation mit adaptivem Audio und bis zu 30h Batterielaufzeit.",
    category: "tech",
    badge: "Bestseller",
    originalPrice: "279 €",
    discountPrice: "219 €",
    discount: "–21%",
    affiliateUrl: "#",
    featured: true,
    emoji: "🎧",
  },
  {
    id: "2",
    title: "Dyson V15 Detect",
    description: "Der intelligenteste Akkustaubsauger von Dyson mit Laser-Stauberkennungstechnologie.",
    category: "lifestyle",
    badge: "Top-Empfehlung",
    originalPrice: "699 €",
    discountPrice: "549 €",
    discount: "–21%",
    affiliateUrl: "#",
    featured: true,
    emoji: "✨",
  },
  {
    id: "3",
    title: "Booking.com Premium",
    description: "Exklusive Rabatte auf über 28 Millionen Unterkünfte weltweit. Mitglieder sparen durchschnittlich 15%.",
    category: "reisen",
    badge: "Exklusiv",
    affiliateUrl: "#",
    featured: true,
    emoji: "✈️",
  },
  {
    id: "4",
    title: "Samsung Galaxy S25 Ultra",
    description: "Das neue Flagship von Samsung mit Galaxy AI, 200MP Kamera und S Pen Funktionalität.",
    category: "tech",
    badge: "Neu",
    originalPrice: "1.319 €",
    discountPrice: "1.099 €",
    discount: "–17%",
    affiliateUrl: "#",
    emoji: "📱",
  },
  {
    id: "5",
    title: "Nike Laufschuhe Pegasus",
    description: "Reaktionsfreudig, komfortabel und langlebig — der ideale Allrounder für tägliche Läufe.",
    category: "fitness",
    originalPrice: "130 €",
    discountPrice: "89 €",
    discount: "–32%",
    affiliateUrl: "#",
    emoji: "👟",
  },
  {
    id: "6",
    title: "Trade Republic",
    description: "Kostenloses ETF-Depot, 4% Zinsen auf dein Guthaben. In 5 Minuten eröffnet.",
    category: "finanzen",
    badge: "Empfohlen",
    affiliateUrl: "#",
    emoji: "📈",
  },
  {
    id: "7",
    title: "Hugo Boss Capsule",
    description: "Zeitlose Klassiker für den modernen Mann. Jetzt 25% auf ausgewählte Kollektionen.",
    category: "mode",
    discount: "–25%",
    affiliateUrl: "#",
    emoji: "👔",
  },
  {
    id: "8",
    title: "Whoop 4.0",
    description: "Dein persönlicher Fitness-Coach am Handgelenk. Messe Recovery, Schlaf und Training ohne Ablenkung.",
    category: "fitness",
    badge: "Pro-Tipp",
    affiliateUrl: "#",
    emoji: "⌚",
  },
  {
    id: "9",
    title: "Airalo eSIM Weltreise",
    description: "Daten in über 200 Ländern ohne teure Roaming-Gebühren. Sofort aktivierbar per eSIM.",
    category: "reisen",
    affiliateUrl: "#",
    emoji: "🌍",
  },
];

export const featuredDeals = deals.filter((d) => d.featured);

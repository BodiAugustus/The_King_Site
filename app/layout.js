import { Analytics } from "@vercel/analytics/next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "The King: A Bronze Age Tale II | Tristan Nettles",
  description:
    "In a brutal Bronze Age world of bronze, blood, and betrayal, Pan Shepherd fights for love, vengeance, and destiny to rescue the woman he loves. Epic historical fiction sequel by Tristan Nettles. 100% of author proceeds support freeing Ashley Oosthuizen from wrongful imprisonment. Pre-order now and help make her voice heard.",

  // Keywords for search engines
  keywords: [
    "The King - A Bronze Age Tale II",
    "The Shepherd - A Bronze Age Tale",
    "Tristan Nettles",
    "False Positive",
    "Bronze Age historical fiction",
    "epic adventure",
    "Pan Shepherd",
    "Ashley Oosthuizen",
    "Histria Books",
    "Simon & Schuster",
    "ancient history novel",
    "vengeance and destiny",
    "great novels",
  ],

  // Open Graph (Facebook, LinkedIn, general social)
  openGraph: {
    title: "The King: A Bronze Age Tale II – Power, Destiny, Survival",
    description:
      "Ashley Oosthuizen's life is on the line. This gripping, epic Bronze Age saga by Tristan Nettles is more than fiction—it's a call to action. Every pre-order helps amplify her voice and fight for justice. Join the legion.",
    url: "https://www.tristannettles.com/the-king", // ← update to your actual novel page URL
    siteName: "Tristan Nettles | Novelist",
    images: [
      {
        url: "/cover.jpg", // ← your book cover (absolute or relative; use full https:// if possible)
        width: 1200,
        height: 1800,
        alt: "The King: A Bronze Age Tale II book cover – epic Bronze Age battle scene silhouette",
      },
      {
        url: "/banner.webp", // ← hero banner as fallback
        width: 1600,
        height: 900,
        alt: "Bronze Age warriors and war elephants – The King promotional banner",
      },
    ],
    locale: "en_US",
    type: "book",
    book: {
      authors: ["https://www.tristannettles.com/about"], // or your author profile URL
      isbn: "9781592117673", // from earlier images/code – confirm if needed
      releaseDate: "2026-09-22",
      tags: ["Historical Fiction", "Bronze Age", "Adventure", "Epic Saga"],
    },
  },

  // Twitter/X Card
  twitter: {
    card: "summary_large_image",
    title: "The King: A Bronze Age Tale II by Tristan Nettles",
    description:
      "A Bronze Age epic of love, vengeance, and survival. Pre-order to help free Ashley Oosthuizen—every copy counts in this fight for justice.",
    images: ["/cover.jpg"], // Twitter picks the first good OG image anyway
    creator: "@tristan_nettles",
    site: "@tristan_nettles",
  },

  // Other important tags
  alternates: {
    canonical:
      "https://www.simonandschuster.com/books/The-King/Tristan-Nettles/A-Bronze-Age-Tale/9781592117673", // ← your live URL
  },

  // Author & publisher
  authors: [
    {
      name: "Tristan Nettles",
      url: "https://www.tristannettles.com",
    },
  ],

  publisher: "Histria Books / Simon & Schuster",

  // Prevent indexing issues if site is new/pre-launch
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons / manifest (optional but good for PWA/mobile)
  icons: {
    icon: "/favicon.ico", // add your favicon
    apple: "/apple-icon.png", // if you have one
  },

  // Structured data hint (Google loves this for books)
  // You can also add full JSON-LD in a <script> tag in layout.js head
  metadataBase: new URL("https://www.tristannettles.com"), // base for relative URLs
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${inter.variable} font-sans bg-[#0F0F0F] text-white`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

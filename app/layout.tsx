// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE_URL = "https://yourdomain.com"; // ← change after deploy

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Sayandip Paul | Full-Stack Developer",
    template: "%s | Sayandip Paul",
  },

  description:
    "Computer Science and Engineering student building production-ready web applications using Next.js, Node.js, MongoDB, and AI systems.",

  keywords: [
    "Sayandip Paul",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer India",
    "CSE Student Portfolio",
  ],

  authors: [{ name: "Sayandip Paul" }],

  openGraph: {
    title: "Sayandip Paul | Full-Stack Developer",
    description:
      "Production-ready web applications, AI systems, and scalable backend architecture.",
    url: SITE_URL,
    siteName: "Sayandip Portfolio",
    images: [
      {
        url: "/public/profile.jpeg", // add this image (1200x630)
        width: 1200,
        height: 630,
        alt: "Sayandip Paul Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sayandip Paul | Full-Stack Developer",
    description:
      "Full-Stack Developer building intelligent systems and scalable web apps.",
    images: ["/public/profile.jpeg"], // add this image (1200x630)
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sayandip Paul",
    url: SITE_URL,
    image: `${SITE_URL}/profile.jpeg`,
    jobTitle: "Full-Stack Developer",
    sameAs: [
      "https://github.com/sayandip-a",
      "https://linkedin.com/in/sayandippaul",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Brainware University",
    },
    knowsAbout: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "Machine Learning",
      "Artificial Intelligence",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sayandip Portfolio",
    url: SITE_URL,
  };

  return (
    <html lang="en">
      <body>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

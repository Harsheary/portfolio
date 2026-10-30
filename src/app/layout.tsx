import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { NavbarDemo } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://harsheary.com"),
  title: {
    default: "Harsh Eary | Software Engineer & Applied AI",
    template: "%s | Harsh Eary",
  },
  description:
    "Toronto software engineer building dependable full-stack products and applied AI systems with React, ASP.NET Core, Python, and Azure.",
  keywords: [
    "Harsh Eary",
    "software engineer",
    "full-stack developer",
    "applied AI",
    "Toronto developer",
    "React developer",
    "ASP.NET Core",
  ],
  authors: [{ name: "Harsh Eary", url: "https://harsheary.com" }],
  creator: "Harsh Eary",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "/",
    siteName: "Harsh Eary",
    title: "Harsh Eary | Software Engineer & Applied AI",
    description:
      "Full-stack products and applied AI systems built with thoughtful interfaces and dependable engineering.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Eary | Software Engineer & Applied AI",
    description:
      "Full-stack products and applied AI systems built with thoughtful interfaces and dependable engineering.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden bg-black antialiased`}
      >
        <NavbarDemo />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

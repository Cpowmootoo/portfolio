import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bradley Kell | Full Stack SaaS & Cloud Architect",
  description: "Bradley Kell designs, builds, and modernizes SaaS platforms, subscription systems, and cloud applications with Node.js, Python, PHP, AWS, and Google Cloud.",
  icons: {
    icon: "/bk.svg",
    shortcut: "/bk.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

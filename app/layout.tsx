import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const rubik = localFont({
  src: [
    {
      path: "./fonts/rubik-v30-latin-600.woff2",
      weight: "600",
    },
    {
      path: "./fonts/rubik-v30-latin-700.woff2",
      weight: "700",
    },
  ],
  variable: "--font-rubik",
});

const dmSans = localFont({
  src: "./fonts/dm-sans-v16-latin-regular.woff2",
  weight: "400",
  variable: "--font-dmSans",
});

export const metadata: Metadata = {
  title: "Plufi | plumbing Service website",
  description: "Quality plumbing solutions for homes and businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${rubik.variable} antialiased`}>
        <NextTopLoader color="#ffd974" showSpinner={false} />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

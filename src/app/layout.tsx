import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Geist ki jagah Inter use kar rahe hain
import "./globals.css";
import { Providers } from "./providers";

// Inter font setup
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Wasiq Khan — Frontend Developer",
    template: "%s | Wasiq Khan",
  },
  description:
    "Frontend Developer building modern, responsive, and user-friendly web experiences.",
  metadataBase: new URL("https://mwasiqk5.github.io"),
  openGraph: {
    title: "Wasiq Khan — Frontend Developer",
    description:
      "Building modern, responsive, and user-friendly web experiences.",
    type: "website",
  },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} h-full antialiased`} // Variable update kar di
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-white/10 selection:text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
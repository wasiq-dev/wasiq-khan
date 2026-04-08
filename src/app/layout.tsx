import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-white/10 selection:text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

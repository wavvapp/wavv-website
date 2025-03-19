import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Mono, Anton } from "./fonts";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
});

const metadata: Metadata = {
  title: "Wavv",
  description: "Signal your Wave",
  icons: {
    icon: "/images/favicon.ico",
    apple: "/images/apple-icon.png",
    shortcut: "/images/favicon-16x16.png",
  },
};

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.className} ${Anton.variable} ${Mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

import "./globals.css";
import { Open_Sans } from "next/font/google";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const openSans = Open_Sans({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Tangle Teezer Title",
  description: "Our Description tag",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ua">
      <body className={openSans.className}>
        <Header />
        <main className="flex min-h-screen flex-col items-center p-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

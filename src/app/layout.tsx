import Header from "@/components/NavBars/Header";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import Footer from "@/components/Footersec/Footer";

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export const metadata: Metadata = {
  title: "outdoor-adventures-nextjs",
  description: "outdoor-adventures-nextjs-description",
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      lang="en"
      className="scroll-smooth antialiased"
      suppressHydrationWarning>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

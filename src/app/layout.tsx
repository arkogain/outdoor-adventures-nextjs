import NavSwitch from "@/components/NavBars/NavSwitch";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export const metadata: Metadata = {
  title: "outdoor-adventures-nextjs",
  description: "outdoor-adventures-nextjs-description",
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <NavSwitch />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;

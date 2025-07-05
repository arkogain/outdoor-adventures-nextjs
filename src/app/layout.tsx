import Header from "@/components/NavBars/Header";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import Footer from "@/components/Footersec/Footer";
import { Slide, ToastContainer } from "react-toastify";

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
        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="light"
          transition={Slide}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

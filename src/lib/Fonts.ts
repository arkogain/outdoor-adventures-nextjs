import { Montserrat, Noto_Sans } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  style: "normal",
  display: "swap",
  weight: ["900"],
  variable: "--font-montserrat",
});

export const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-sans",
  style: "normal",
  display: "swap",
});

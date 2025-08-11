import "./globals.css";
import MahindraNavbar from "@/components/nav";
import Footer from "@/components/footer";

import localFont from "next/font/local";
import { Manrope } from "next/font/google";
import Layout from "@/components/layout/layout";
import { Toaster } from "sonner";
import Script from "next/script";

// Local SpeedBeast font
const SpeedBeast = localFont({
  src: [
    {
      path: "../../public/fonts/speedbeast/SpeedBeast.ttf",
      weight: "400",
    },
  ],
  variable: "--font-SpeedBeast",
});

// Google Font: Manrope
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  title: {
    default: "Mac Auto India | Electric Rickshaw & E-Cart Manufacturer",
  },
  description:
    "Mac Auto India is a leading electric vehicle manufacturer in India, specializing in e-rickshaws, electric carts, and eco-friendly mobility solutions. With patented designs, i-CAT certification, and a PAN-India dealer network, we deliver reliable, high-performance EVs for passenger, cargo, and waste management needs. Driving e-rickshaw innovation since 2014.",
  keywords:
    "Mac Auto India, electric rickshaw manufacturer, e-rickshaw in India, e-cart manufacturer, electric vehicle manufacturer in Faridabad, battery rickshaw India, cargo e-rickshaw, passenger e-rickshaw, waste management e-cart, i-CAT certified e-rickshaw, EV manufacturer India",
  alternates: {
    canonical: `/`,
  },
  verification: {
    google: "eMK-J7AIIge48keTYluNj9JqmmIGzGLqgoohVld9lB4", // your given code
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5Z8REY1QK8"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5Z8REY1QK8');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}

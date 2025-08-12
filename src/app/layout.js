import "./globals.css";
import MahindraNavbar from "@/components/nav";
import Footer from "@/components/footer";
import { GoogleTagManager } from "@next/third-parties/google";

import localFont from "next/font/local";
import { Manrope } from "next/font/google";
import Layout from "@/components/layout/layout";
import { Toaster } from "sonner";

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

export const metadata = {
  metadataBase: new URL("https://www.macautoindia.com"),
  title: {
    default: " Mac Auto India | Electric Rickshaw & E-Cart Manufacturer",
  },
  description:
    "Mac Auto India is a leading electric vehicle manufacturer in India, offering i-CAT certified e-rickshaws & EVs with patented designs & a PAN-India network.",
  keywords:
    " e rickshaw, e rickshaw price, electric auto rickshaw, electric auto price in india, E Rickshaw price On Road, E Rickshaw manufacturers in India, E Rickshaw Dealers in India, E rickshaw suppliers, Icat approved e rickshaw in india, Electric Rickshaw Manufacturer & Supplier, i‑cat certified e rickshaw manufacturers, e rickshaw parts supplier India, electric vehicle manufacturers in India, eco friendly transport in India, E rickshaw parts supplier in India",
  alternates: {
    canonical: `/`,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "eMK-J7AIIge48keTYluNj9JqmmIGzGLqgoohVld9lB4",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="eMK-J7AIIge48keTYluNj9JqmmIGzGLqgoohVld9lB4"
      />
      <GoogleTagManager gtmId="G-5Z8REY1QK8" />
      <body
        className={`${SpeedBeast.variable} ${manrope.variable} antialiased`}
        suppressHydrationWarning
      >
        <Layout>{children}</Layout>
        <Toaster />
      </body>
    </html>
  );
}

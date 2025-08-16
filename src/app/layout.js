import "./globals.css";
import MahindraNavbar from "@/components/nav";
import Footer from "@/components/footer";
import { GoogleTagManager } from "@next/third-parties/google";

import localFont from "next/font/local";
import { Manrope } from "next/font/google";
import Layout from "@/components/layout/layout";
import { Toaster } from "sonner";
import Script from "next/script";
import Image from "next/image";

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
    default: "Mac Auto India | Electric Rickshaw & E-Cart Manufacturer",
  },
  description:
    "Mac Auto India is a leading electric vehicle manufacturer in India, offering i-CAT certified e-rickshaws & EVs with patented designs & a PAN-India network.",
  keywords:
    "e rickshaw, e rickshaw price, electric auto rickshaw, electric auto price in india, E Rickshaw price On Road, E Rickshaw manufacturers in India, E Rickshaw Dealers in India, E rickshaw suppliers, Icat approved e rickshaw in india, Electric Rickshaw Manufacturer & Supplier, i-cat certified e rickshaw manufacturers, e rickshaw parts supplier India, electric vehicle manufacturers in India, eco friendly transport in India, E rickshaw parts supplier in India",
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

  openGraph: {
    type: "website",
    url: "https://www.macautoindia.com/",
    title: "Mac Auto India | Electric Rickshaw & E-Cart Manufacturer",
    description:
      "Mac Auto India is a leading electric vehicle manufacturer in India, offering i-CAT certified e-rickshaws & EVs with patented designs & a PAN-India network.",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/b809beb0-ce95-448b-9240-3c11aaa75617.jpg?token=sVMwVS93ylb8wlGovaHw1_xvAHaesPxt-Z95RErdHeY&height=1000&width=1000&expires=33291090671",
        width: 1000,
        height: 1000,
        alt: "Mac Auto India Electric Rickshaw",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    domain: "macautoindia.com",
    url: "https://www.macautoindia.com/",
    title: "Mac Auto India | Electric Rickshaw & E-Cart Manufacturer",
    description:
      "Mac Auto India is a leading electric vehicle manufacturer in India, offering i-CAT certified e-rickshaws & EVs with patented designs & a PAN-India network.",
    images: [
      "https://opengraph.b-cdn.net/production/images/b809beb0-ce95-448b-9240-3c11aaa75617.jpg?token=sVMwVS93ylb8wlGovaHw1_xvAHaesPxt-Z95RErdHeY&height=1000&width=1000&expires=33291090671",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness"],
              name: "Mac Auto India",
              url: "https://www.macautoindia.com/",
              logo: "https://www.macautoindia.com/assets/images/logo.png",
              image:
                "https://www.macautoindia.com/assets/images/home-banner.jpg",
              description:
                "Mac Auto India is a leading electric vehicle manufacturer in India, specializing in e-rickshaws, electric carts, and eco-friendly mobility solutions with patented designs and i-CAT certification.",
              telephone: "+91-80-9062-9062",
              email: "info@macauto.in",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Gurukul Indraprastha College, 121A, 121B",
                addressLocality: "Faridabad",
                addressRegion: "Haryana",
                postalCode: "121004",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "26.4983",
                longitude: "78.6598",
              },
              sameAs: [
                "https://www.facebook.com/MacAutoofficial",
                "https://www.instagram.com/macautoindiaofficial/",
                "https://x.com/macautoofficial",
              ],
              founder: {
                "@type": "Person",
                name: "Abhijeet Wassan",
                jobTitle: "Founder & CEO",
              },
              foundingDate: "2014",
              foundingLocation: {
                "@type": "Place",
                name: "Faridabad, India",
              },
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "MAC Passenger E-Rickshaw",
                    category: "Passenger Electric Vehicle",
                    brand: "Mac Auto India",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "MAC Cargo Loader E-Vehicle",
                    category: "Cargo Electric Vehicle",
                    brand: "Mac Auto India",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "MAC Garbage Collection E-Vehicle",
                    category: "Waste Management Electric Vehicle",
                    brand: "Mac Auto India",
                  },
                },
              ],
            }),
          }}
        />
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '932744845716336');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <Image
            height={64}
            width={64}
            style={{ display: "none" }}
            alt="Facebook Pixel"
            src="https://www.facebook.com/tr?id=932744845716336&ev=PageView&noscript=1"
          />
        </noscript>
      </head>

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

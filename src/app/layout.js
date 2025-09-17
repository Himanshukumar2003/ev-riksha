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
import { GoogleAnalytics } from "@next/third-parties/google";
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
  metadataBase: new URL("https://mack-ev.com/"),
  title: {
    default: "MACK EV | Electric Rickshaw & E-Cart Manufacturer",
  },
  description:
    "MACK EV is a leading electric vehicle manufacturer in India, offering i-CAT certified e-rickshaws & EVs with patented designs & a PAN-India network.",
  keywords:
      "e rickshaws, e rickshaw price, electric auto rickshaw, electric auto price in india, E Rickshaw price On Road, E Rickshaw manufacturers in India, E Rickshaw Dealers in India, E rickshaw suppliers, Icat approved e rickshaw in india, Electric Rickshaw Manufacturer & Supplier, i-cat certified e rickshaw manufacturers, e rickshaw parts supplier India, electric vehicle manufacturers in India, eco friendly transport in India, E rickshaw parts supplier in India",
  alternates: {
    canonical: `/`,
  },
  // robots: {
  //   index: true,
  //   follow: true,
  // },
 

   verification: {
    google: "ujgvZFXfQFVhYm59UCfjX9wpScL3VAe13cdjBcJP-Io",
  },
  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    url: "https://mack-ev.com/",
    title: "MACK EV | Electric Rickshaw & E-Cart Manufacturer",
    description:
      "MACK EV is a leading electric vehicle manufacturer in India, offering i-CAT certified e-rickshaws & EVs with patented designs & a PAN-India network.",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/b809beb0-ce95-448b-9240-3c11aaa75617.jpg?token=sVMwVS93ylb8wlGovaHw1_xvAHaesPxt-Z95RErdHeY&height=1000&width=1000&expires=33291090671",
        width: 1000,
        height: 1000,
        alt: "MACK EV Electric Rickshaw",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    domain: "macautoindia.com",
    url: "https://mack-ev.com/",
    title: "MACK EV | Electric Rickshaw & E-Cart Manufacturer",
    description:
      "MACK EV is a leading electric vehicle manufacturer in India, offering i-CAT certified e-rickshaws & EVs with patented designs & a PAN-India network.",
    images: [
      "https://opengraph.b-cdn.net/production/images/b809beb0-ce95-448b-9240-3c11aaa75617.jpg?token=sVMwVS93ylb8wlGovaHw1_xvAHaesPxt-Z95RErdHeY&height=1000&width=1000&expires=33291090671",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <Script
  id="schema-org"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": ["Organization", "LocalBusiness"],
      name: "MACK EV",
      url: "https://mack-ev.com/",
      logo: "https://mack-ev.com/assets/images/logo.png",
      image: "https://mack-ev.com/assets/images/home-banner.jpg",
      description:
        "MACK EV is a leading electric vehicle manufacturer in India, specializing in e-rickshaws, electric carts, and eco-friendly mobility solutions with patented designs and i-CAT certification.",
      telephone: "+91-80-9062-9062",
      email: "info@mack-ev.com",
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
        "https://www.facebook.com/MackEVofficial",
        "https://www.instagram.com/mack-evofficial/",
        "https://x.com/mackEVofficial",
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
            name: "MACK EV Passenger E-Rickshaw",
            category: "Passenger Electric Vehicle",
            brand: "MACK EV",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "MACK EV Cargo Loader E-Vehicle",
            category: "Cargo Electric Vehicle",
            brand: "MACK EV",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "MACK EV Garbage Collection E-Vehicle",
            category: "Waste Management Electric Vehicle",
            brand: "MACK EV",
          },
        },
      ],
    }),
  }}
/> */}

        {/* <Script id="fb-pixel" strategy="afterInteractive">
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
        </Script> */}

        <noscript>
          <img
            className="hidden w-full"
            style={{ display: "none" }}
            alt="Facebook Pixel"
            src="https://www.facebook.com/tr?id=932744845716336&ev=PageView&noscript=1"
          />
        </noscript>
  <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M6VR7WHJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YKPT1J5NNE"
          strategy="afterInteractive"
          async
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YKPT1J5NNE');
          `}
        </Script>

        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M6VR7WHJ"
height="0" width="0" style={{ display: "none", visibility: "hidden" }}
></iframe></noscript>
      </head>

      <meta
        name="google-site-verification"
        content="eMK-J7AIIge48keTYluNj9JqmmIGzGLqgoohVld9lB4"
      />
      <GoogleAnalytics gaId="G-5Z8REY1QK8" />
      <GoogleTagManager gtmId="GTM-M6VR7WHJ" />

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

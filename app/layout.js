import { Bebas_Neue, Cinzel } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Topbar from "@/components/Topbar";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const cinzel = Cinzel({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cinzel",
});

export const metadata = {
  title: "Digital Marketing Services in USA",
  description:
    "Promozione Branding Agency is a full-services digital marketing agency in USA. We Provide SEO, PPC, Google Ads, Web Development, B2B Services, Email Marketing, and more.",
  icons: {
    icon: "/logoo.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5CHVJPVS');`}
        </Script>
      </head>

      <body className={`${bebasNeue.variable} ${cinzel.variable} antialiased`}>
        <Topbar />
        <Navbar />
        {children}
        <Footer />

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5CHVJPVS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}

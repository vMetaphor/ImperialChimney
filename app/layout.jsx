import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileIconNav from "../components/MobileIconNav";
import { defaultKeywords } from "../lib/seo";

export const metadata = {
  metadataBase: new URL("https://imperialchimney-masonry.com"),
  title: {
    default: "Chimney Sweep & Masonry Contractor in Pottstown, PA",
    template: "%s | Imperial Chimney & Masonry"
  },
  description:
    "Imperial Chimney & Masonry provides chimney sweeping, chimney repair, chimney stucco repair, masonry repair, brick and block repair, and pressure washing in Pottstown, PA and nearby towns.",
  keywords: defaultKeywords,
  category: "Home Services",
  applicationName: "Imperial Chimney & Masonry",
  authors: [{ name: "Imperial Chimney & Masonry" }],
  creator: "Imperial Chimney & Masonry",
  publisher: "Imperial Chimney & Masonry",
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Imperial Chimney & Masonry",
    locale: "en_US",
    title: "Chimney Sweep & Masonry Contractor in Pottstown, PA",
    description:
      "Chimney sweeping, chimney repair, chimney stucco repair, masonry repair, brick and block repair, and pressure washing in Pottstown, PA and nearby towns.",
    images: [
      {
        url: "/assets/img/logo.png",
        width: 512,
        height: 512,
        alt: "Imperial Chimney & Masonry logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Sweep & Masonry Contractor in Pottstown, PA",
    description:
      "Chimney sweep, chimney repair, stucco repair, brick and block repair, and pressure washing in Pottstown, PA.",
    images: ["/assets/img/logo.png"]
  },
  other: {
    "geo.region": "US-PA",
    "geo.placename": "Pottstown"
  },
  icons: {
    icon: "/assets/img/favicon.png",
    shortcut: "/assets/img/favicon.png",
    apple: "/assets/img/favicon.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <MobileIconNav />
      </body>
    </html>
  );
}

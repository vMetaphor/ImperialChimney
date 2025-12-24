import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileIconNav from "../components/MobileIconNav";

export const metadata = {
  metadataBase: new URL("https://imperialchimney-masonry.com"),
  title: {
    default: "Imperial Chimney & Masonry",
    template: "%s | Imperial Chimney & Masonry"
  },
  description:
    "Imperial Chimney & Masonry provides chimney sweeping, chimney cleaning, fireplace repairs, chimney relining, and masonry repairs for homeowners in Pottstown, PA 19464 and nearby towns.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Imperial Chimney & Masonry",
    description:
      "Chimney sweeping, chimney cleaning, fireplace repairs, chimney relining, and masonry repairs in Pottstown, PA and nearby towns.",
    images: [
      {
        url: "/assets/img/logo.png",
        width: 512,
        height: 512,
        alt: "Imperial Chimney & Masonry logo"
      }
    ]
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

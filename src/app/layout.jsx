import Header from "./components/Header";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jasa Restorasi Foto",
  description: "Jasa Restorasi Foto | Terpercaya, Profesional, dan Termurah",
  other: [
    {
      name: 'google-site-verification',
      content: 'pOvKPLUckaDtVXFBjlH1M_fZj0J7VXP-lo_ALwKnye4',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Jasa Restorasi Foto</title>
        <meta name="description" content="Jasa Restorasi Foto Terpercaya, Profesional, dan Termurah" />
      </head>
      <body className={`bg-gray-100 text-gray-800 ${inter.className}`}>
        <Header />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}

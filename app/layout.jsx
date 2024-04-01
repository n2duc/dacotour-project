import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ActiveSectionContextProvider from "@/context/active-section-context";

// const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-sans", });

export const metadata = {
  title: "Dacotours",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <ActiveSectionContextProvider>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import Navbar from "@/components/Navbar";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: "Axis AI - MultiverseX Ecosystem",
  description: "AI-powered blockchain interactions for MultiverseX ecosystem",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={`min-h-full flex flex-col ${poppins.variable} font-sans bg-[#0f0f0f] text-white`}>
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}

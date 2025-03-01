import "./globals.css";
import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Axis AI - MultiverseX Ecosystem",
  description: "AI-powered blockchain interactions for MultiverseX ecosystem",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`min-h-full flex flex-col ${poppins.variable} font-sans bg-[#0f0f0f] text-white`}
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/90 to-[#0f0f0f]" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          <div className="absolute inset-0">
            <div className="h-full w-full bg-[#0f0f0f]">
              <div className="absolute h-full w-full bg-[radial-gradient(#23f7de_1px,transparent_1px)] [background-size:32px_32px] opacity-25" />
            </div>
          </div>
        </div>

        
        
        <Navbar />
        <main className="flex-grow pt-16">{children}</main>
        <Toaster 
          position="top-right"
          theme="dark"
          richColors
        />
      </body>
    </html>
  );
}

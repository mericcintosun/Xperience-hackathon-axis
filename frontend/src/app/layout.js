import "./globals.css";

export const metadata = {
  title: "Axis AI - MultiverseX Ecosystem",
  description: "AI-powered blockchain interactions for MultiverseX ecosystem",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}

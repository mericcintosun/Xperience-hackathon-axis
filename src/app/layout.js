import "./globals.css";

export const metadata = {
  title: "Axis | MultiversX AI Agent",
  description: "Axis is a MultiversX AI Agent",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

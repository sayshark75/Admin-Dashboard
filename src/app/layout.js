import "./globals.css";

export const metadata = {
  title: "Board",
  description: "A Elegant Dashboard to Maintain and View Statistics of Website",
  theme: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

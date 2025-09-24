import "./globals.css";
import HeaderWrapper from "@/components/HeaderWrapper";

export const metadata = {
  title: "Mi Tienda",
  description: "Proyecto en Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <HeaderWrapper />
        {children}
      </body>
    </html>
  );
}

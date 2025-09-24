import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Mi Tienda",
  description: "Proyecto Next.js con Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}

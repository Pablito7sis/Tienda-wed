import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        
        {/* Logo o Nombre */}
        <div className="text-2xl font-bold">
          <Link href="/">Mi Tienda</Link>
        </div>

        {/* Menú */}
        <nav className="flex gap-6">
          <Link href="/" className="hover:text-gray-200">Inicio</Link>
          <Link href="/hombre" className="hover:text-gray-200">Hombre</Link>
          <Link href="/mujeres" className="hover:text-gray-200">Mujeres</Link>
        </nav>

        {/* Carrito y Login */}
        <div className="flex gap-4">
          <Link href="/carrito" className="hover:text-gray-200">Carrito</Link>
          <Link href="/login" className="hover:text-gray-200">Iniciar Sesión</Link>
        </div>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("usuario");
    if (storedUser) {
      setUsuario(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    setUsuario(null);
    window.location.href = "/"; // redirige al inicio
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-blue-600 text-white">
      {/* Logo o nombre */}
      <div className="text-2xl font-bold">
        <Link href="/">Mi Tienda</Link>
      </div>

      {/* Navegación */}
      <nav className="flex space-x-6">
        <Link href="/">Inicio</Link>
        <Link href="/hombre">Hombre</Link>
        <Link href="/mujeres">Mujeres</Link>
      </nav>

      {/* Opciones derechas */}
      <div className="flex space-x-4">
        <Link href="/carrito">🛒 Carrito</Link>
        {usuario ? (
          <>
            <span className="italic">Hola, {usuario}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              Cerrar sesión
            </button>
          </>
        ) : (
          <Link href="/login">Iniciar Sesión</Link>
        )}
      </div>
    </header>
  );
}

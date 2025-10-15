"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [usuario, setUsuario] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // No funcional: solo evita envío y muestra mensaje simple
    if (!usuario || !correo || !password || !confirmPassword) {
      setError("Completa todos los campos");
      return;
    }
    setError("");
    // Ejemplo de acción visual (no necesario)
    localStorage.setItem("usuario", usuario || correo);
    router.push("/"); // redirige a inicio (opcional)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-4xl flex flex-col md:flex-row">
        {/* Imagen izquierda */}
        <div className="md:w-1/2 w-full h-56 md:h-auto">
          <img
            src="/login-image.jpg"
            alt="Imagen decorativa"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Panel de formulario */}
        <div className="md:w-1/2 w-full p-8 text-black">
          <h1 className="text-2xl font-bold mb-1">Jende</h1>
          <p className="text-sm text-gray-600 mb-6">
            Jende Coffee es una marca de cafés especiales inspirada en historias que han sido olvidadas, en la gente, en la diversidad de productos, en la fauna y en la flora colombiana.

          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="w-full p-2 border rounded text-black"
            />

            <input
              type="email"
              placeholder="Correo electrónico"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              className="w-full p-2 border rounded text-black"
            />

            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded text-black"
            />

            <input
              type="password"
              placeholder="Confirmar contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border rounded text-black"
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Continuar
            </button>

            <div className="flex items-center my-2">
              <div className="flex-grow h-px bg-gray-200" />
              <span className="px-3 text-xs text-gray-500">o</span>
              <div className="flex-grow h-px bg-gray-200" />
            </div>

            <button
              type="button"
              className="w-full border rounded py-2 flex items-center justify-center gap-2 hover:bg-gray-50"
            >
              {/* Icono Google simple */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 48 48"
              >
                <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C34 32.9 29.9 36 24 36 15.8 36 9 29.2 9 21S15.8 6 24 6c5.1 0 9.6 1.9 13 5l4.6-4.6C37.8 2.3 31.2 0 24 0 10.7 0 0 10.7 0 24s10.7 24 24 24c13.3 0 24-10.7 24-24 0-1.6-.2-3.1-.4-4.5z"/>
                <path fill="#FF3D00" d="M6.3 14.8l6.6 4.8C14.6 16 18.9 12 24 12c5.1 0 9.6 1.9 13 5l4.6-4.6C37.8 2.3 31.2 0 24 0 16 0 9.3 4.8 6.3 11.8z"/>
                <path fill="#4CAF50" d="M24 48c6.1 0 11.7-2.3 15.9-6.1l-7.4-6.1C29.3 36.9 26.8 38 24 38c-6 0-11.1-3.9-13-9.4l-6.7 5.2C6.9 42.6 14 48 24 48z"/>
                <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1 3-3 5.5-5.6 7.2 0 0 0 0 0 0l7.9 6.5C41.6 38.7 48 31.9 48 24c0-1.6-.2-3.1-.4-4.5z"/>
              </svg>
              Iniciar sesión con Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

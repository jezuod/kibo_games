// components/Footer.js
import { Spain_Flag, UK_Flag } from "../assets";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-white text-black py-8 w-full bottom-0">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h5 className="font-bold text-lg mb-4">Servicios</h5>
          <Link href="/Politica">
          <p className="mb-2">Términos del Servicio</p>
          </Link>
          <Link href="/Privacidad">
          <p className="mb-2">Privacidad</p>
          </Link>
        </div>
        <div>
          <h5 className="font-bold text-lg mb-4">Comunidad</h5>
          <p className="mb-2">Valores</p>
          <Link href="/subir-videojuego">
            <p className="mb-2">Sube tu videojuego</p>
          </Link>
        </div>
        <div>
          <h5 className="font-bold text-lg mb-4">Soporte</h5>
          <p className="mb-2">Contacto</p>
          <Link href="/puntuaciones">Tabla de puntuaciones</Link>
        </div>
        <div>
          <h5 className="font-bold text-lg mb-4">Idiomas</h5>
          <div className="flex items-center mb-2">
            <p className="mr-2">Español</p>
            <img src={Spain_Flag.src} className="h-3" alt="Kibo Logo" />
          </div>
          <div className="flex items-center mb-2">
            <p className="mr-2">English</p>
            <img src={UK_Flag.src} className="h-3" alt="Kibo Logo" />
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="mb-2">Created by Kibo Games</p>
        <p>
          &copy; {new Date().getFullYear()} Kibo Games. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

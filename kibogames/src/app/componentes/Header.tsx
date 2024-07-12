// components/Header.js

import Link from "next/link";
export default function Header() {
    return (
      <nav className="bg-blue-500 p-4 text-white flex">
        <Link href="/categorias" className="flex justify-between items-center max-w-6xl mx-auto space-x-4">Categorias</Link>
        <Link href="/categorias/rondas" className="flex justify-between items-center max-w-6xl mx-auto space-x-4">Por Rondas</Link>
        <Link href="/mi-perfil" className="flex justify-between items-center max-w-6xl mx-auto space-x-4">Mi perfil</Link>
        <Link href="/noticias" className="flex justify-between items-center max-w-6xl mx-auto space-x-4">Noticias</Link>
        <Link href="/buscar" className="flex justify-between items-center max-w-6xl mx-auto space-x-4">Buscar</Link>
        <Link href="/noticias/ultima" className="flex justify-between items-center max-w-6xl mx-auto space-x-4">Ultima noticia</Link>
        <Link href="/juego/chess" className="flex justify-between items-center max-w-6xl mx-auto space-x-4">Jugar Chess</Link>
        <Link href="/juego/4dot" className="flex justify-between items-center max-w-6xl mx-auto space-x-4">Jugar 4-raya</Link>
        <br/>
        <br/>
        <br/>
      </nav>
    );
  }
  
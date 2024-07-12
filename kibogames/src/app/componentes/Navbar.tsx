"use client"; // This is a client component

import { CustomButton } from './';
import { Menu, Profile, Search, Logo , KiboLogo } from "../assets"
import { navlinks } from '../constants/constants';
import { signOut, useSession } from "next-auth/react";
import Link from 'next/link';



export default function Navbar() {

  const { data: session, status } = useSession()

  console.log(status)




  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={KiboLogo.src} className="h-8" alt="Kibo Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900">Kibo Games</span>
          </Link>

          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navlinks.map((link) => (
                <li
                  key={link.name}
                  className={`flex p-4bg-[#3a3a43]'}`}
                >
                  <Link href={link.link} className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}`}>
                    {link.name}
                  </Link>
                </li>
              ))}
              <li key="Categoria" className="flex relative group">
                <Link href="/categorias" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Categorías
                </Link>
                <div className="absolute hidden group-hover:block mt-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg">
                  <Link href="/categorias/Rondas" className="block py-2 px-3 text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:hover:text-blue-500">
                    Rondas
                  </Link>
                  <Link href="/categorias/Tiempo real" className="block py-2 px-3 text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:hover:text-blue-500">
                    Tiempo real
                  </Link>
                  <Link href="/categorias/Familiar" className="block py-2 px-3 text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:hover:text-blue-500">
                    Familiar
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          

          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
  {session ? (
    <>
      <Link href="/mi-perfil">
        <div className="flex items-center justify-center">
          <img src={session.user.image ?? '/path/to/default/avatar.jpg'} alt="Foto de perfil" className="rounded-full w-10 h-10 object-cover" />
          <span className="hidden md:inline-block text-white font-medium ml-2">Mi Perfil</span>
        </div>
      </Link>
    </>
  ) : (
    <Link href="/api/auth/signin">
      <div className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        LOGIN
      </div>
    </Link>
  )}
</div>
        </div>
      </nav>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

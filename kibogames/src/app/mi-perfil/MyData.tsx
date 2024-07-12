"use client"
import { signOut, useSession } from "next-auth/react";
import MyRankings from "./MyRankings"
import { redirect } from "next/dist/server/api-utils";
import { permanentRedirect } from "next/navigation";
import { AdapterUser } from "next-auth/adapters";
import { Button } from "@material-tailwind/react";
import { UnderlineTabs } from "../juego/[nombreJuego]/descripcion/UnderlineTabs";
import { Foto_perfil, Border, Border_1, Border_2, Border_3, Border_4, Border_5} from "../assets"
import MyFriends from "./MyFriends";
import MyGames from "./MyGames";
import Link from 'next/link';

//Hacer un diccionario y que segun el dato de la base de datos que tome el borde 1,2,3,4,5,6
const recordFondoPerfil= {
  0: Border,
  1: Border_1,
  2: Border_2,
  3: Border_3,
  4: Border_4,
  5: Border_5
};




const MyData = () => {
  const { data: session, status } = useSession();
  console.log(session);

  var border = Border
  try
  {

    if(session?.user.nivelPerfil)
      border = recordFondoPerfil[session?.user.nivelPerfil]
  } catch(e){}
    
  const handlerLogout = () => {
    signOut();
  };

  return (
    <>
      <div className="max-w-4xl mx-auto my-10 p-5 shadow-lg rounded-lg bg-white">
        <div className="text-center">
        <p className="text-2xl font-semibold">Mi perfil: {session?.user?.name ?? 'Invitado'}</p>
        {session?.user?.image && (
          <div style={{ 
            backgroundImage: `url(${border.src})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain', 
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '300px', 
            height: '205px', 
            borderRadius: '50%', 
            margin: '0 auto', 
            }}>
            <img src={session.user.image} alt="Foto de perfil" style={{ 
              width: '128px', 
              height: '128px', 
              borderRadius: '50%', 
              objectFit: 'cover', 
            }} />
          </div> 
          )}
          <div className="mt-5 text-left">
            <p><strong>Nombre:</strong> {session?.user?.name ?? 'Invitado'}</p>
            <p><strong>Correo:</strong> {session?.user?.email ?? 'No disponible'}</p>
            {session && (
              <>
                <p><strong>Fecha de registro:</strong> {new Date().getFullYear()}</p>
                <p><strong>Reputación:</strong> {session?.user?.reputation || 'Nueva'}</p>
                <p><strong>Nivel :</strong> 50</p>
              </>
            )}
          </div>
          <div className="flex justify-center mt-5">
            {session ? (
              <>
                <Button color="blue"  className="mr-2" onClick={() => { /* Función para cambiar contraseña */ }}>
                  Cambiar contraseña
                </Button>
               
                <Button color="blue" buttonType="filled" className="mr-2" onClick={() => { window.location.href = '/logros' }}>
                  Ver logros
                </Button>
                <button type='button' onClick={handlerLogout} className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'>
                  Cerrar Sesión
                </button>
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
      </div>
    </>
  );
};

export default MyData;

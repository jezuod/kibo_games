import { GetServerSideProps } from 'next';
import { Button } from "@material-tailwind/react";
import { ChatIcon , CheckCircleIcon, XCircleIcon} from '@heroicons/react/solid'; // Asegúrate de tener esta biblioteca instalada npm install @heroicons/react@v1
import { Foto_perfil} from "../assets"
import { signOut, useSession } from "next-auth/react";
const friendsList = [
    { id: 1, name: 'Paco', status: 'online', imageUrl: '/path/to/image1.jpg', nivelAmistad: 'Alto' },
    { id: 2, name: 'Juan', status: 'offline', imageUrl: '/path/to/image2.jpg', nivelAmistad: 'Medio' },
    { id: 3, name: 'Ana', status: 'online', imageUrl: '/path/to/image3.jpg', nivelAmistad: 'Bajo' },
    { id: 4, name: 'John', status: 'online', imageUrl: '/path/to/image3.jpg', nivelAmistad: 'Medio' },
  ];
  
  const MyFriends = () => {
    const { data: session } = useSession();

    if (!session) {
        // Opcional: Renderizar algún mensaje o componente alternativo si el usuario no ha iniciado sesión
        return <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Lista de Amigos</h2>
            Por favor, inicia sesión para ver tu lista de amigos.
            </div>
    }

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Lista de Amigos</h2>
            <ul className="space-y-3">
                {friendsList.map((friend) => (
                    <li key={friend.id} className="flex items-center bg-white shadow p-3 rounded-lg">
                        <img src={Foto_perfil.src} alt="Foto de perfil" className="w-10 h-10 rounded-full mr-3" />
                        <div className="flex-grow flex flex-col">
                            <span>{friend.name}</span>
                            <span className={`text-xs mt-1 ${friend.nivelAmistad === 'Alto' ? 'text-green-500' : friend.nivelAmistad === 'Medio' ? 'text-blue-500' : 'text-red-500'}`}>
                                Amistad: {friend.nivelAmistad}
                            </span>
                        </div>
                        {friend.status === 'online' ? (
                            <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                        ) : (
                            <XCircleIcon className="w-5 h-5 text-gray-400 mr-2" />
                        )}
                        <button
                            onClick={() => console.log(`Iniciar chat con ${friend.name}`)}
                            className="flex items-center justify-center p-2 rounded-full text-white bg-blue-500 hover:bg-blue-600"
                        >
                            <ChatIcon className="w-6 h-6"/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MyFriends;

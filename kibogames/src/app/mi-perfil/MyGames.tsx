import { GetServerSideProps } from 'next';
import { Button } from "@material-tailwind/react";
import { ChatIcon , CheckCircleIcon, XCircleIcon} from '@heroicons/react/solid'; // Asegúrate de tener esta biblioteca instalada npm install @heroicons/react@v1
import { Foto_perfil} from "../assets"
import { videoGamesRow1, videoGamesRow2 } from "../constants/constants";
import VideoGameCategoryRow from "../componentes/videoGameCategoryRow";
import { signOut, useSession } from "next-auth/react";

const MyGames = () => {
    const { data: session } = useSession();
    if (!session) {
        // Opcional: Renderizar algún mensaje o componente alternativo si el usuario no ha iniciado sesión
        return <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Mis Juegos</h2>
            Por favor, inicia sesión para ver tu lista de juegos.
            </div>
    }
    return (
        <VideoGameCategoryRow titulo="Mis Juegos" videoGames={videoGamesRow2} />
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    return {
        props: {} 
    }
}

export default MyGames;

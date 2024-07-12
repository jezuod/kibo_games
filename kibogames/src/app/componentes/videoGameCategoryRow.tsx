// videoGameCategoryRow.tsx
import { JSX } from "react/jsx-runtime";
import { IVideoGame } from "../models/videogame";
import VideoGameCard from "./videoGameCard";


// Estilos para los títulos
const titleStyles = {
  fontSize: '24px',
  color: 'black',
  marginBottom: '10px',
  textAlign: 'center', // Centra el texto
};

// Estilos para el fondo azul
const blueBackgroundStyles = {
  backgroundColor: '#007bff', // Azul
  padding: '10px',
  borderRadius: '10px',
  marginBottom: '20px',
};





//<h1 style={titleStyles}>{titulo}</h1>
//<h1 className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 text-start">{titulo}</h1>

export default function VideoGameCategoryRow({ videoGames, titulo }: { videoGames: IVideoGame[], titulo: string }) : JSX.Element {
  return (
    <div>
      <div className="bg-white dark:bg-gray-900 p-4 rounded-md mb-2 border-b border-gray-200 dark:border-gray-600 ">
        <h1 className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 justify-center text-center">{titulo}</h1>
      </div>
      <div className='flex flex-wrap'>
        {videoGames.map((game, index) => (
          <VideoGameCard key={index} game={game}  />
        ))}
      </div>
    </div>
  );
}

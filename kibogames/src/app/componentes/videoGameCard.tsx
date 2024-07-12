// videoGameCard.tsx
import Image from "next/image";
import { IVideoGame } from "../models/videogame";
import Link from "next/link";

// Estilos CSS
const cardContainerStyles = {
  margin: '0 auto 20px', // Añadir margen inferior para separar las tarjetas
};

const cardStyles = {
  width: '200px',
  height: '200px',
  overflow: 'hidden',
  borderRadius: '10px', // Hacer las imágenes redondeadas
};

const imageStyles = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '10px', // Hacer las imágenes redondeadas
};

const buttonStyles = {
  marginTop: '10px',
  padding: '10px 20px',
  borderRadius: '20px', // Hacer el botón redondo
  backgroundColor: '#007bff', // Azul
  color: 'white',
  border: 'none',
  cursor: 'pointer',
};


//<button style={buttonStyles}>Juega ya</button>

export default function VideoGameCard({ game }: { game: IVideoGame }) {
  return (
      <div className="text-center relative" style={cardContainerStyles}>
        <Link legacyBehavior href={`/juego/${game.name}/descripcion`}>
          <a>
            <div style={cardStyles}>
              <Image src={game.mainImage} alt={`Imagen de ${game.name}`} width={200} height={200} style={imageStyles} />
            </div>
          </a>
        </Link>
        <h2>{game.name}</h2>
        <div className="absolute bottom-0 right-0 m-4">
          <Link href={`/juego/${game.name}`}>
            <button className="text-white bg-transparent focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-4xl px-3 py-2 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gray-600 rounded-full opacity-50 blur"></div>
              <svg className="w-12 h-12 z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5v14l11-7z" fill="currentColor" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
  );


}
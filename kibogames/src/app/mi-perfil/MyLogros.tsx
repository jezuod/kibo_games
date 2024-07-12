import { Victoria, Derrota, Rendicion, Logro, KiboLogo ,Spain_Flag, UK_Flag,Grand_master, Cuatro, Snakes, FirstVictory,Serpent, Volando} from "../assets"
import { useState, useEffect } from 'react';

interface ILogro {
    id: number;                 // Identificador único del logro
    img: string;                 // URL de la imagen del logro 
    imgDefecto: string;          // URL de la imagen por defecto s
    descripcion: string;         // Descripción del logro
    tipo: 'victoria' | 'logro' | 'perder';  // Tipo de logro
    nombreLogro: string;         // Nombre del logro
    isLogroObtenido: boolean;    // indica si el logro ha sido obtenido
    nameVideojuego: string;      // Nombre del videojuego 
  }

  export const LogrosPorJuego: Record<string, ILogro[]> = {
    'Ajedrez': [
      {
        id: 1,
        img: FirstVictory.src, 
        imgDefecto: 'path/to/defaultImg.jpg',
        descripcion: 'Gana tu primera partida',          
        tipo: 'logro',
        nombreLogro: 'Tu Primera Victoria',
        isLogroObtenido: true, // Cambiar según el estado actual del logro
        nameVideojuego: 'Ajedrez'
      },
      {
        id: 2,
        img: Grand_master.src, 
        imgDefecto: 'path/to/defaultImg.jpg',
        descripcion: 'Alcanza un ELO de 2500+',
        tipo: 'logro',
        nombreLogro: 'Gran Maestro',
        isLogroObtenido: true, // Cambiar según el estado actual del logro
        nameVideojuego: 'Ajedrez'
      },
      {
        id: 3,
        img: Grand_master.src, 
        imgDefecto: 'path/to/defaultImg.jpg',
        descripcion: 'Gana una partida en menos de 10 movimientos',
        tipo: 'victoria',
        nombreLogro: 'Victoria Rápida',
        isLogroObtenido: true,
        nameVideojuego: 'Ajedrez'
      },
      {
        id: 4,
        img: Grand_master.src, 
        imgDefecto: 'path/to/defaultImg.jpg',
        descripcion: 'Defiende exitosamente tu posición en desventaja material',
        tipo: 'logro',
        nombreLogro: 'Defensor Tenaz',
        isLogroObtenido: false,
        nameVideojuego: 'Ajedrez'
      },
      
    ],
    '4 en raya': [
      {
        id: 5,
        img: FirstVictory.src, 
        imgDefecto: 'path/to/defaultImg.jpg',
        descripcion: 'Gana tu primera partida',          
        tipo: 'logro',
        nombreLogro: 'Tu Primera Victoria',
        isLogroObtenido: true, // Cambiar según el estado actual del logro
        nameVideojuego: '4 en raya'
      },
      {
        id: 6,
        img: Cuatro.src, 
        imgDefecto: 'path/to/defaultImg.jpg',
        descripcion: 'Gana 50 partidas',
        tipo: 'logro',
        nombreLogro: 'Conector Maestro',
        isLogroObtenido: true,
        nameVideojuego: '4 en raya'
      },
      {
        id: 7,
        img: Cuatro.src, 
        imgDefecto: 'path/to/defaultImg.jpg',
        descripcion: 'Gana con una línea vertical',
        tipo: 'logro',
        nombreLogro: 'Victoria Vertical',
        isLogroObtenido: false,
        nameVideojuego: 'Aj4 en rayaedrez'
      },
      {
        id: 8,
        img: Cuatro.src, 
        imgDefecto: 'path/to/defaultImg.jpg',
        descripcion: 'Gana 10 partidas con líneas horizontales',
        tipo: 'logro',
        nombreLogro: 'Héroe Horizontal',
        isLogroObtenido: false,
        nameVideojuego: '4 en raya'
      },
      {
        id: 9,
        img: Cuatro.src, 
        imgDefecto: 'path/to/defaultImg.jpg',
        descripcion: 'Logra 15 victorias con diagonales',
        tipo: 'logro',
        nombreLogro: 'Dominio Diagonal',
        isLogroObtenido: false,
        nameVideojuego: '4 en raya'
      }
    ],
    'Escaleras y serpientes': [
      {
        id: 10,
        img: FirstVictory.src, 
        imgDefecto: 'path/to/defaultImg.jpg',
        descripcion: 'Gana tu primera partida',          
        tipo: 'logro',
        nombreLogro: 'Tu Primera Victoria',
        isLogroObtenido: true, // Cambiar según el estado actual del logro
        nameVideojuego: 'Escaleras y serpientes'
      },
      {
        id: 11,
        img: Volando.src, 
        imgDefecto: 'path/to/defaultImg.jpg',
        descripcion: 'Has volado turnos',          
        tipo: 'logro',
        nombreLogro: 'Volandoooo',
        isLogroObtenido: true, // Cambiar según el estado actual del logro
        nameVideojuego: 'Escaleras y serpientes'
      },
      {
        id: 12,
        img: Serpent.src, 
        imgDefecto: 'path/to/defaultImg.jpg',
        descripcion: 'Te atrapó una serpiente',          
        tipo: 'logro',
        nombreLogro: 'Atrapado por la Serpiente',
        isLogroObtenido: true, // Cambiar según el estado actual del logro
        nameVideojuego: 'Escaleras y serpientes'
      },
      {
        id: 13,
        img: Snakes.src, 
        imgDefecto: 'path/to/defaultImg.jpg',
        descripcion: 'Gana 5 partidas subiendo en cada escalera',
        tipo: 'logro',
        nombreLogro: 'Escalador Experto',
        isLogroObtenido: false,
        nameVideojuego: 'Escaleras y serpientes'
      },
      {
        id: 14,
        img: Snakes.src, 
        imgDefecto: 'path/to/defaultImg.jpg',
        descripcion: 'Finaliza una partida sin tocar ninguna serpiente',
        tipo: 'logro',
        nombreLogro: 'Sobreviviente',
        isLogroObtenido: false,
        nameVideojuego: 'Escaleras y serpientes'
      },
      {
        id: 15,
        img: Snakes.src, 
        imgDefecto: 'path/to/defaultImg.jpg',
        descripcion: 'Alcanza el final primero en 10 partidas',
        tipo: 'logro',
        nombreLogro: 'Rey de la Cima',
        isLogroObtenido: false,
        nameVideojuego: 'Escaleras y serpientes'
      },
      {
        id: 16,
        img: Snakes.src, 
        imgDefecto: 'path/to/defaultImg.jpg',
        descripcion: 'Gana tu primera partida',
        tipo: 'logro',
        nombreLogro: 'Suerte del Principiante',
        isLogroObtenido: false,
        nameVideojuego: 'Escaleras y serpientes'
      }
      
    ]
  };
  const MyLogros = () => {
    const [logrosCompletados, setLogrosCompletados] = useState([]);
  
    useEffect(() => {
      const logros = LogrosPorJuego['Escaleras y serpientes'].filter(logro => logro.isLogroObtenido);
      setLogrosCompletados(logros);
    }, []);
  
    return (
      <div className="p-4 bg-white">
        
        <h2 className="text-2xl font-bold mb-4 ">Logros Destacados</h2>
        <div className="grid grid-cols-3 gap-4">
          {logrosCompletados.map(logro => (
            <div key={logro.nombreLogro} className="flex flex-col items-center ">
              <img
                src={logro.img}
                alt={logro.nombreLogro}
                onError={(e) => e.currentTarget.src = logro.imgDefecto}
                className="w-20 h-20 rounded-full object-cover "
              />
              <p className="mt-2 text-center">{logro.nombreLogro}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default MyLogros;

"use client"
import { useState, useEffect } from 'react';
import { Button, Card, CardBody, CardFooter, Progress, Tooltip } from "@material-tailwind/react";
import { Victoria, Derrota, Rendicion, Logro, KiboLogo ,Spain_Flag, UK_Flag,Grand_master, Cuatro, Snakes, FirstVictory,Serpent, Volando} from "../assets"

interface ILogro {
  id : number;                 // Identificador único del logro
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
  'Conecta 4': [
    {
      id: 5,
      img: FirstVictory.src, 
      imgDefecto: 'path/to/defaultImg.jpg',
      descripcion: 'Gana tu primera partida',          
      tipo: 'logro',
      nombreLogro: 'Tu Primera Victoria',
      isLogroObtenido: true, // Cambiar según el estado actual del logro
      nameVideojuego: 'Conecta 4'
    },
    {
      id: 6,
      img: Cuatro.src, 
      imgDefecto: 'path/to/defaultImg.jpg',
      descripcion: 'Gana 50 partidas',
      tipo: 'logro',
      nombreLogro: 'Conector Maestro',
      isLogroObtenido: true,
      nameVideojuego: 'Conecta 4'
    },
    {
      id: 7,
      img: Cuatro.src, 
      imgDefecto: 'path/to/defaultImg.jpg',
      descripcion: 'Gana con una línea vertical',
      tipo: 'logro',
      nombreLogro: 'Victoria Vertical',
      isLogroObtenido: false,
      nameVideojuego: 'AjConecta 4edrez'
    },
    {
      id: 8,
      img: Cuatro.src, 
      imgDefecto: 'path/to/defaultImg.jpg',
      descripcion: 'Gana 10 partidas con líneas horizontales',
      tipo: 'logro',
      nombreLogro: 'Héroe Horizontal',
      isLogroObtenido: false,
      nameVideojuego: 'Conecta 4'
    },
    {
      id: 9,
      img: Cuatro.src, 
      imgDefecto: 'path/to/defaultImg.jpg',
      descripcion: 'Logra 15 victorias con diagonales',
      tipo: 'logro',
      nombreLogro: 'Dominio Diagonal',
      isLogroObtenido: false,
      nameVideojuego: 'Conecta 4'
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
    },
    {
      id: 17,
      img: Serpent.src, 
      imgDefecto: 'path/to/defaultImg.jpg',
      descripcion: 'Te han atrapado 3 serpientes',          
      tipo: 'logro',
      nombreLogro: 'Atrapado por la Serpiente',
      isLogroObtenido: true, // Cambiar según el estado actual del logro
      nameVideojuego: 'Escaleras y serpientes'
    },
    {
      id: 18,
      img: Volando.src, 
      imgDefecto: 'path/to/defaultImg.jpg',
      descripcion: 'Has usado 3 escaleras',          
      tipo: 'logro',
      nombreLogro: 'Escalador!',
      isLogroObtenido: true, // Cambiar según el estado actual del logro
      nameVideojuego: 'Escaleras y serpientes'
    },
    
  ]
};


const Logros = () => {
  const [juegoSeleccionado, setJuegoSeleccionado] = useState('');
  const [logros, setLogros] = useState<ILogro[]>([]);

  const obtenerLogros = (juego: string): ILogro[] => {
    const defaultImg = Snakes.src; // imagen por defecto

    return LogrosPorJuego[juego] || [];
  };

  useEffect(() => {
    if (juegoSeleccionado) {
      const logrosObtenidos = obtenerLogros(juegoSeleccionado);
      setLogros(logrosObtenidos);
    }
  }, [juegoSeleccionado]);

  return (
    <>
      <h1 className="text-xl font-bold mb-4">Logros por Juego</h1>
      <div className="mb-4">
        <select
          onChange={(e) => setJuegoSeleccionado(e.target.value)}
          value={juegoSeleccionado}
          className="border border-gray-300 rounded p-2"
        >
          <option value="">Seleccione un juego</option>
          <option value="Ajedrez">Ajedrez</option>
          <option value="Conecta 4">Conecta 4</option>
          <option value="Escaleras y serpientes">Escaleras y serpientes</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4">
    {juegoSeleccionado && logros.map((logro, index) => (
      <Card key={index} className="shadow-xl p-2">
        <CardBody>
          {logro.isLogroObtenido && (
            <img
              src={logro.img}
              alt={logro.nombreLogro}
              onError={(e) => (e.currentTarget.src = logro.imgDefecto)}
              className="w-32 h-32 object-cover rounded-full mx-auto" // Ajusté el tamaño de la imagen
            />
          )}
          <h2 className="text-md font-bold mt-2">{logro.nombreLogro}</h2>
          <p className="text-sm">{logro.descripcion}</p>
        </CardBody>
        <CardFooter>
          <div className="flex justify-between items-center text-sm">
            <span>{logro.recompensa}</span>
            {logro.isLogroObtenido ? (
              <Button color="green" size="sm" ripple="light">Completado</Button>
            ) : (
              <Tooltip content={`Progreso: ${logro.progreso}`} placement="top">
                <Button color="gray" size="sm" ripple="light" disabled>En Progreso</Button>
              </Tooltip>
            )}
          </div>
        </CardFooter>
      </Card>
    ))}
</div>

    </>
  );
};

export default Logros;


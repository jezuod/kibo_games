import { Victoria, Derrota, Rendicion, Logro, KiboLogo ,Spain_Flag, UK_Flag,} from "../assets"

export interface ILogro {
    img: string;                 // URL de la imagen del logro o un identificador de recurso
    imgDefecto: string;          // URL de la imagen por defecto si la principal no está disponible
    descripcion: string;         // Descripción del logro
    tipo: 'victoria' | 'logro' | 'perder';  // Tipo de logro
    nombreLogro: string;         // Nombre del logro
    isLogroObtenido: boolean;    // Booleano que indica si el logro ha sido obtenido
    nameVideojuego: string;      // Nombre del videojuego asociado al logro
  }
  const defaultImg = KiboLogo.src; // imagen por defecto

  export const LogrosPorJuego: Record<string, ILogro[]> = {
    'Ajedrez': [
        // Continuación y finalización de la lista de "Ajedrez"
        {
            img: 'path/to/image/GranMaestro.jpg', // Asumiendo que tienes una imagen específica
            imgDefecto: 'path/to/defaultImg.jpg',
            descripcion: 'Alcanza un ELO de 2500+',
            tipo: 'logro',
            nombreLogro: 'Gran Maestro',
            isLogroObtenido: false, // Cambiar según el estado actual del logro
            nameVideojuego: 'Ajedrez'
          },
          {
            img: 'path/to/image/VictoriaRapida.jpg',
            imgDefecto: 'path/to/defaultImg.jpg',
            descripcion: 'Gana una partida en menos de 10 movimientos',
            tipo: 'victoria',
            nombreLogro: 'Victoria Rápida',
            isLogroObtenido: true,
            nameVideojuego: 'Ajedrez'
          },
          {
            img: 'path/to/image/DefensorTenaz.jpg',
            imgDefecto: 'path/to/defaultImg.jpg',
            descripcion: 'Defiende exitosamente tu posición en desventaja material',
            tipo: 'logro',
            nombreLogro: 'Defensor Tenaz',
            isLogroObtenido: false,
            nameVideojuego: 'Ajedrez'
          },
          {
            img: 'path/to/image/EstrategaBrillante.jpg',
            imgDefecto: 'path/to/defaultImg.jpg',
            descripcion: 'Gana 10 partidas mediante jaque mate con dos torres',
            tipo: 'logro',
            nombreLogro: 'Estratega Brillante',
            isLogroObtenido: false,
            nameVideojuego: 'Ajedrez'
          },
          {
          img: 'path/to/image/CazadorDePeones.jpg',
          imgDefecto: 'path/to/defaultImg.jpg',
          descripcion: 'Captura 100 peones en partidas clasificatorias',
          tipo: 'logro',
          nombreLogro: 'Cazador de Peones',
          isLogroObtenido: false,
          nameVideojuego: 'Ajedrez'
        },
        {
          img: 'path/to/image/ReyDelEndgame.jpg',
          imgDefecto: 'path/to/defaultImg.jpg',
          descripcion: 'Gana 20 partidas en el endgame',
          tipo: 'logro',
          nombreLogro: 'Rey del Endgame',
          isLogroObtenido: true,
          nameVideojuego: 'Ajedrez'
        },
        {
          img: 'path/to/image/AperturaMaestra.jpg',
          imgDefecto: 'path/to/defaultImg.jpg',
          descripcion: 'Gana partidas usando 10 aperturas diferentes',
          tipo: 'logro',
          nombreLogro: 'Apertura Maestra',
          isLogroObtenido: false,
          nameVideojuego: 'Ajedrez'
        },
        {
          img: 'path/to/image/ElGranSacrificio.jpg',
          imgDefecto: 'path/to/defaultImg.jpg',
          descripcion: 'Gana una partida sacrificando tu dama',
          tipo: 'logro',
          nombreLogro: 'El Gran Sacrificio',
          isLogroObtenido: false,
          nameVideojuego: 'Ajedrez'
        },
        {
          img: 'path/to/image/JaquesContinuos.jpg',
          imgDefecto: 'path/to/defaultImg.jpg',
          descripcion: 'Pon en jaque al rey enemigo en 5 movimientos consecutivos',
          tipo: 'logro',
          nombreLogro: 'Jaques Continuos',
          isLogroObtenido: false,
          nameVideojuego: 'Ajedrez'
        },
        
      ],
    '4 en raya': [
      // aqui los logros de 4 en raya
    ],
    'Escaleras y serpientes': [
      // aqui los logros de Escaleras y serpientes
    ]
  };
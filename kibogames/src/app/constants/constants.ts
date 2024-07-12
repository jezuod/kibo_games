import { IVideoGame } from "../models/videogame";

//podemos import las imagenes
export const navlinks = [
  {
    name: "Inicio",
    imgUrl: "",
    link: "/",
  },
  {
    name: "Noticias",
    imgUrl: "",
    link: "/noticias",
  },
  // {
  //   name: "Ajedrez",
  //   imgUrl: "",
  //   link: "/juego/Ajedrez",
  // },
  // {
  //   name: "4 en raya",
  //   imgUrl: "",
  //   link: "/juego/Conecta 4",
  // },
  // {
  //   name: "Mi perfil",
  //   imgUrl: "",
  //   link: "/mi-perfil",
  // },
  {
    name: "Torneos",
    imgUrl: "",
    link: "/torneos",
  },
  {
    name: "Buscar",
    imgUrl: "",
    link: "/buscar",
  },
];

var imgURL: string =
  "https://upload.wikimedia.org/wikipedia/commons/7/78/Monopoly_board_on_white_bg.jpg" as string;
var imgURLCatan: string =
  "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Catan-2015-boxart.jpg/250px-Catan-2015-boxart.jpg" as string;

var imgURLRisk: string =
  "https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Risk_logo.jpg/220px-Risk_logo.jpg" as string;

var imgURLTetris: string =
  "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Tetris_NES_play.png/250px-Tetris_NES_play.png" as string;

var imgURLBlackJack: string =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/BlackJack6.jpg/250px-BlackJack6.jpg" as string;
var imgURLMikeCrack: string =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Mikecrack_opening_title.png/250px-Mikecrack_opening_title.png" as string;
var imgURLBlokus: string =
  "https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/Blokus_board_game.jpg/200px-Blokus_board_game.jpg" as string;
var imgURLDixit: string =
  "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Dixitgame.jpg/200px-Dixitgame.jpg" as string;
var imgURLYahztee: string =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Original_Yahtzee_game_set_-_1980s_UK_release.jpg/250px-Original_Yahtzee_game_set_-_1980s_UK_release.jpg" as string;
var imgURLForbiddenDessert: string =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Forbidden_Desert_board_game_layout.jpg/220px-Forbidden_Desert_board_game_layout.jpg";
var imgURLAjedrez: string =
  "https://upload.wikimedia.org/wikipedia/commons/d/d9/Opening_chess_position_from_black_side.jpg";
var imgURLconnecta4: string =
  "https://upload.wikimedia.org/wikipedia/commons/3/32/Tic_tac_toe.svg";
var imgURLEscalerasYSerpientes =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Snakes_and_Ladders.jpg/800px-Snakes_and_Ladders.jpg";

export const cates = {
  estrategia: "Estrategia",
  familiar: "Familiar",
  videojuego: "Videojuego",
  cartas: "Cartas",
  deduccion: "Deducción",
  suerte: "Suerte",
  multijugador: "Multijugador",
  rondas: "Rondas",
  tiempoReal: "Tiempo real",
  solitario: "Solitario",
  equipos: "Equipos",
  largo: "Largo",
  corto: "Corto",
};

export const videoGamesRow1: IVideoGame[] = [
  {
    name: "Escaleras y serpientes",
    images: [imgURLEscalerasYSerpientes],
    mainImage: imgURLEscalerasYSerpientes,
    description:
      "Escaleras y serpientes es un juego de tablero clásico para dos o más jugadores. El objetivo es ser el primero en llegar al final del tablero, subiendo escaleras y evitando las serpientes.",
    averageRating: 4.5,
    tutorial:
      "En Escaleras y serpientes, los jugadores lanzan un dado para moverse por el tablero. Si aterrizan en una casilla que tiene la base de una escalera, se mueven hasta la casilla superior de la escalera. Si aterrizan en la cabeza de una serpiente, se deslizan hasta la cola de la serpiente.",
    videoUrl: "https://www.youtube.com/watch?v=Kti3oKIZ8Mw",
    gameUrl: "http://localhost:3003",
    categories: ["Tablero", "Dos o más jugadores", "Corto", "Rondas"],
    availableToPlay: true,
    rankingExplanation:
      "Master:2000 puntos\nPro:1500 puntos\nAmateur:1000 puntos\nNovato:500 puntos\nPrincipiante:0 puntos\n",
  },
  {
    name: "Ajedrez",
    images: [imgURLAjedrez],
    mainImage: imgURLAjedrez,
    description:
      "El ajedrez es un juego de estrategia y tablero para dos jugadores. El objetivo es dar jaque mate al rey del oponente.",
    averageRating: 4.8,
    tutorial:
      "En el ajedrez, cada jugador controla 16 piezas: un rey, una dama, dos torres, dos alfiles, dos caballos y ocho peones. Las piezas se mueven de forma específica por el tablero, y el objetivo es capturar al rey del oponente.",
    videoUrl: "https://www.youtube.com/watch?v=Kti3oKIZ8Mw",

    gameUrl: "http://localhost:3001",
    categories: ["Estrategia", "Tablero", "Dos jugadores", "Largo", "Rondas"],
    availableToPlay: true,
    rankingExplanation:
      "Master:2000 puntos\nPro:1500 puntos\nAmateur:1000 puntos\nNovato:500 puntos\nPrincipiante:0 puntos\n",
  },
  {
    name: "Conecta 4",
    images: [imgURLconnecta4],
    mainImage: imgURLconnecta4,
    description:
      "4 en raya es un juego de estrategia para dos jugadores. El objetivo es conectar cuatro fichas de tu color en línea recta, ya sea horizontal, vertical o diagonal.",
    averageRating: 4.3,
    tutorial:
      "En 4 en raya, los jugadores turnan para colocar sus fichas en un tablero de 7x6. El primer jugador en conectar cuatro fichas de su color en línea recta gana la partida.",
    videoUrl: "https://www.youtube.com/watch?v=Kti3oKIZ8Mw",
    gameUrl: "http://localhost:3002",
    categories: ["Estrategia", "Tablero", "Dos jugadores", "Corto", "Rondas"],
    availableToPlay: true,
  },
  {
    name: "Risk",
    images: [imgURLRisk],
    mainImage: imgURLRisk,
    description:
      "Conquista el mundo en este juego de estrategia. Cada jugador intenta expandir sus territorios mientras defiende los suyos.",
    averageRating: 4.5,
    tutorial:
      "Risk es un juego de dominación global. Empiezas con ejércitos, que colocas estratégicamente. En tu turno, atacas a los territorios vecinos para expandir tu dominio. Recuerda reforzar tus fronteras y formar alianzas.",
    videoUrl: "https://www.youtube.com/watch?v=Kti3oKIZ8Mw",
    gameUrl: "/juego/Risk",
    categories: [
      "Estrategia",
      cates.multijugador,
      cates.tiempoReal,
      cates.equipos,
    ],
  },
  {
    name: "Catan",
    images: [imgURLCatan],
    mainImage: imgURLCatan,
    description:
      "Catan es un juego de estrategia sobre construir asentamientos y manejar recursos. Los jugadores negocian y compiten por los recursos más valiosos.",
    averageRating: 5,
    tutorial:
      "En Catan, tu objetivo es construir y expandir tus asentamientos. Usa los recursos que obtienes cada turno para construir caminos, asentamientos y ciudades. Negocia con otros jugadores para obtener los recursos que necesitas.",
    videoUrl: "https://www.youtube.com/watch?v=Kti3oKIZ8Mw",
    gameUrl: "/juego/Catan",
    categories: ["Estrategia", cates.multijugador],
  },
  {
    name: "Monopoly",
    images: [imgURL],
    mainImage: imgURL,
    description:
      "Monopoly, el clásico juego de mesa de negocios inmobiliarios. Compra, vende e intercambia propiedades para ganar.",
    averageRating: 4,
    tutorial:
      "En Monopoly, mueves tu pieza alrededor del tablero, comprando tantas propiedades como puedas. Cobra renta a otros jugadores cuando caen en tus propiedades. El último jugador en no caer en bancarrota gana.",
    videoUrl: "https://www.youtube.com/watch?v=Kti3oKIZ8Mw",
    gameUrl: "/juego/Monopoly",
    categories: ["Familiar", cates.multijugador],
  },
  {
    name: "Tetris",
    images: [imgURLTetris],
    mainImage: imgURLTetris,
    description:
      "Tetris es un adictivo juego de rompecabezas donde debes encajar bloques que caen para completar líneas y ganar puntos.",
    averageRating: 4.8,
    tutorial:
      "Juega Tetris alineando los bloques que caen para formar líneas completas, las cuales desaparecen, otorgándote puntos. A medida que avanzas, los bloques caen más rápido. ¡Trata de mantener el ritmo!",
    videoUrl: "https://www.youtube.com/watch?v=Kti3oKIZ8Mw",
    gameUrl: "/juego/Tetris",
    categories: ["Videojuego", cates.corto],
  },
  {
    name: "Black Jack",
    images: [imgURLBlackJack],
    mainImage: imgURLBlackJack,
    description:
      "Black Jack, un juego de cartas clásico en los casinos. El objetivo es vencer al crupier obteniendo una mano que sume 21 o lo más cerca posible sin pasarse.",
    averageRating: 4.2,
    tutorial:
      "En Black Jack, recibes dos cartas y decides si pedir más cartas para acercarte a 21. Si te pasas, pierdes. Si logras un Black Jack o estás más cerca de 21 que el crupier, ganas.",
    videoUrl: "https://www.youtube.com/watch?v=Kti3oKIZ8Mw",
    gameUrl: "/juego/Black%20Jack",
    categories: ["Cartas", cates.corto, cates.suerte, cates.multijugador],
  },
];

export const videoGamesRow2: IVideoGame[] = [
  {
    name: "Mike Crack",
    images: [imgURLMikeCrack],
    mainImage: imgURLMikeCrack,
    description:
      "Una aventura familiar llena de desafíos y misterios. Ideal para jugar con amigos y familia.",
    averageRating: 4.5,
    tutorial:
      "Mike Crack es un juego de aventuras donde exploras mundos, resuelves acertijos y superas desafíos. Ideal para jugar en familia y disfrutar de su contenido amigable.",
    videoUrl: "https://www.youtube.com/watch?v=Kti3oKIZ8Mw",
    gameUrl: "/juego/Mike%20Crack",
    categories: ["Familiar", cates.solitario, cates.multijugador, cates.largo],
  },
  {
    name: "Blokus",
    images: [imgURLBlokus],
    mainImage: imgURLBlokus,
    description:
      "Blokus fomenta la estrategia y el pensamiento adelantado. El objetivo es colocar todas tus piezas en el tablero mientras bloqueas a tus oponentes.",
    averageRating: 5,
    tutorial:
      "En Blokus, cada jugador elige un color y debe colocar sus piezas de manera que toquen al menos una esquina de sus propias piezas ya colocadas. No se permite el contacto lateral entre piezas del mismo color.",
    videoUrl: "https://www.youtube.com/watch?v=Kti3oKIZ8Mw",
    gameUrl: "/juego/Blokus",
    categories: ["Estrategia", cates.rondas, cates.multijugador, cates.corto],
  },
  {
    name: "Dixit",
    images: [imgURLDixit],
    mainImage: imgURLDixit,
    description:
      "Dixit es un juego de adivinanzas creativas. Usa la imaginación para dar pistas sobre tus cartas y descifrar las de los demás.",
    averageRating: 4,
    tutorial:
      "En Dixit, un jugador es el narrador y da una pista sobre una de sus cartas. Los demás seleccionan cartas de sus manos que mejor coincidan con la pista. Luego, todos intentan adivinar cuál era la carta del narrador.",
    videoUrl: "https://www.youtube.com/watch?v=Kti3oKIZ8Mw",
    gameUrl: "/juego/Dixit",
    categories: ["Deduccion", cates.familiar, cates.rondas, cates.multijugador],
  },
  {
    name: "Yahtzee",
    images: [imgURLYahztee],
    mainImage: imgURLYahztee,
    description:
      "Yahtzee es un juego de dados clásico de suerte y estrategia. Consigue combinaciones específicas de dados para puntuar.",
    averageRating: 4.8,
    tutorial:
      "En Yahtzee, tienes hasta tres tiradas por turno para conseguir una de las combinaciones de dados en la hoja de puntuación. Selecciona cuáles dados conservar y cuáles volver a tirar en cada turno.",
    videoUrl: "https://www.youtube.com/watch?v=Kti3oKIZ8Mw",
    gameUrl: "/juego/Yahtzee",
    categories: ["Suerte"],
  },
  {
    name: "Forbidden Desert",
    images: [imgURLForbiddenDessert],
    mainImage: imgURLForbiddenDessert,
    description:
      "En Forbidden Desert, trabajas en equipo para recuperar un legendario artefacto volador de las ruinas de una ciudad mítica antes de que la tormenta de arena te atrape.",
    averageRating: 4.2,
    tutorial:
      "Forbidden Desert es un juego cooperativo donde los jugadores asumen roles con habilidades especiales. Deben explorar las losetas del desierto, buscar piezas del artefacto y gestionar sus recursos de agua para sobrevivir.",
    videoUrl: "https://www.youtube.com/watch?v=Kti3oKIZ8Mw",
    gameUrl: "/juego/Forbidden%20Desert",
    categories: ["Familiar", cates.equipos, cates.largo, cates.rondas],
  },

  
];

// Array de objetos para Conecta 4
export const RankingConecta4 = [
  { rango: "Principiante", puntosMinimos: 0 },
  { rango: "Amateur", puntosMinimos: 600 },
  { rango: "Avanzado", puntosMinimos: 1200 },
  { rango: "Profesional", puntosMinimos: 1800 },
  { rango: "Maestro", puntosMinimos: 3000 },
];

// Array de objetos para Ajedrez
export const RankingAjedrez = [
  { nombre: "Principiante", puntos: 0 },
  { nombre: "Amateur", puntos: 600 },
  { nombre: "Avanzado", puntos: 1200 },
  { nombre: "Profesional", puntos: 1800 },
  { nombre: "Maestro", puntos: 3000 },
];

// Array de objetos para Serpientes y Escaleras
export const RankingSerpientesEscaleras = [
  { nombre: "Principiante", puntos: 0 },
  { nombre: "Amateur", puntos: 600 },
  { nombre: "Avanzado", puntos: 1200 },
  { nombre: "Profesional", puntos: 1800 },
  { nombre: "Maestro", puntos: 3000 },
];

export const RankingConecta4User = [
  { nombre: "Alejandro", puntos: 40, conectado: true },
  { nombre: "Beatriz", puntos: 1800, conectado: false },
  { nombre: "Carlos", puntos: 1200, conectado: true },
  { nombre: "David", puntos: 200, conectado: true },
  { nombre: "Elena", puntos: 1000, conectado: false }
];

export const RankingAjedrezUser = [
  { nombre: "Fernando", puntos: 550, conectado: true },
  { nombre: "Gloria", puntos: 900, conectado: false },
  { nombre: "Hugo", puntos: 120, conectado: true },
  { nombre: "Isabel", puntos: 1600, conectado: true },
  { nombre: "Javier", puntos: 2900, conectado: false },
  { nombre: "Mario", puntos: 0, conectado: true },
  { nombre: "Roberto", puntos: 2200, conectado: true },
  { nombre: "Manuel", puntos: 2990, conectado: false }
];

export const RankingSerpientesEscalerasUser = [
  { nombre: "Luis", puntos: 30, conectado: true },
  { nombre: "María", puntos: 320, conectado: false },
  { nombre: "Nacho", puntos: 0, conectado: true },
  { nombre: "Olga", puntos: 1910, conectado: true },
  { nombre: "Pablo", puntos: 2540, conectado: false }
];

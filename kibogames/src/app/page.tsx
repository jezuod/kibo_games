import React from "react";
import { IVideoGame } from "./models/videogame";
import VideoGameCategoryRow from "./componentes/videoGameCategoryRow";
import { videoGamesRow1, videoGamesRow2 } from "./constants/constants";



export default function HomePage(){
  return (
    <div>
      
      <VideoGameCategoryRow titulo="Juegos más jugados esta semana" videoGames={videoGamesRow1} />
      <VideoGameCategoryRow titulo="Recién llegados" videoGames={videoGamesRow2} />
    </div>
  );
};

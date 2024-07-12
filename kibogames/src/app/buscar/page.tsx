"use client"; // Marca este archivo como un Componente de Cliente

import React, { useState } from "react";
import { IVideoGame } from "../models/videogame";
import VideoGameCategoryRow from "../componentes/videoGameCategoryRow";
import { videoGamesRow1, videoGamesRow2 } from "../constants/constants";

export default function Buscar() {
    const [searchTerm, setSearchTerm] = useState("");
    
    // Filtrar juegos basados en el término de búsqueda
    const filteredVideoGames: IVideoGame[] = videoGamesRow1
      .concat(videoGamesRow2)
      .filter((game) =>
        game.name.toLowerCase().includes(searchTerm.toLowerCase()) || // Buscar por nombre
        game.categories.some(category => category.toLowerCase().includes(searchTerm.toLowerCase())) // Buscar por categoría
      );
  
    return (
      <div>
        <div className="m-4">
          <input
            type="text"
            placeholder="Buscar juegos o categorías..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        
        <VideoGameCategoryRow titulo="Resultados de búsqueda" videoGames={filteredVideoGames} />
      </div>
    );
  }
  
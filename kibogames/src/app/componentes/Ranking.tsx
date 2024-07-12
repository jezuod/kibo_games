// components/Ranking.tsx

import React from 'react';
import {RankingConecta4User} from "@/app/constants/constants";
import {RankingSerpientesEscalerasUser} from "@/app/constants/constants";
import {RankingAjedrezUser} from "@/app/constants/constants";

interface RankingProps {
    gameName: string;
}

const Ranking: React.FC<RankingProps> = ({ gameName }) => {
    let rankingData: { rango: string; puntosMinimos: number }[] = [];

    // Determinar el ranking según el nombre del juego
    switch (gameName) {
        case 'Ajedrez':
            rankingData = RankingAjedrezUser;
            break;
        case 'Conecta 4':
            rankingData = RankingConecta4User;
            break;
        case 'Escaleras y serpientes':
            rankingData = RankingSerpientesEscalerasUser;
            break;
        // Agrega más casos para otros juegos si es necesario
        default:
            // Si el juego no tiene un ranking específico, puedes mostrar un mensaje o un ranking genérico
            rankingData = [
                { rango: "Rango 1", puntosMinimos: 0 },
                { rango: "Rango 2", puntosMinimos: 100 },
                { rango: "Rango 3", puntosMinimos: 200 },
                // Y así sucesivamente...
            ];
            break;
    }

    return (
        <div className="ranking" style={{maxHeight: '300px', overflowY: 'auto'}}>
            <ol className="divide-y divide-gray-200 rounded-lg">
                {rankingData
                    .sort((a, b) => b.puntos - a.puntos) // Ordenar por puntos de mayor a menor
                    .map((rank, index) => (
                        <li
                            key={index}
                            className={`flex items-center justify-between px-4 py-3 transition-colors duration-300 hover:bg-gray-100 cursor-pointer ${index === 0 ? 'bg-yellow-200' : index === 1 ? 'bg-gray-200' : index === 2 ? 'bg-orange-200' : ''}`}
                            style={{backgroundColor: index === 0 ? 'rgba(255, 215, 0, 0.5)' : index === 1 ? 'rgba(192, 192, 192, 0.5)' : index === 2 ? 'rgba(218, 170, 94, 0.5)' : ''}}
                        >
                            <div className="flex items-center space-x-4 w-full">
                                <span className="font-bold">{index + 1}.</span>
                                <span className="flex-grow">{rank.nombre}</span>
                                <span className="text-gray-600">{rank.puntos} puntos</span>
                                {rank.conectado ? (
                                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor"
                                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"></path>
                                    </svg>
                                ) : (
                                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor"
                                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                )}
                            </div>
                        </li>
                    ))}
            </ol>
        </div>

    );
};

export default Ranking;

import { useState } from 'react';
import { useSession } from 'next-auth/react';

const MyRankings = () => {
    const initialRankings = [
        { nombreJuego: 'Ajedrez', nivel: "Maestro", puntuacion: 3200, numeroPartidas: 60, Descripción: "Más" },
        { nombreJuego: '4 en raya', nivel: "Avanzado", puntuacion: 1250, numeroPartidas: 26, Descripción: "Más" },
        { nombreJuego: 'Serpientes y escaleras', nivel: "Amateur", puntuacion: 800, numeroPartidas: 12, Descripción: "Más" },
        
    ];

    const [rankings, setRankings] = useState(initialRankings);
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    const { data: session } = useSession();

    const sortRankings = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });

        setRankings(rankings => {
            let sortedRankings = [...rankings].sort((a, b) => {
                if (a[key] < b[key]) return -1;
                if (a[key] > b[key]) return 1;
                return 0;
            });

            if (direction === 'descending') {
                sortedRankings.reverse();
            }

            return sortedRankings;
        });
    };

    if (!session) {
        return (
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">Mis Rankings</h2>
                Por favor, inicia sesión para ver tus rankings.
            </div>
        );
    }

    return (
        <>
            <div className='self-center text-2xl font-semibold whitespace-nowrap mb-4'>
                Mis Rankings
            </div>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6 cursor-pointer" onClick={() => sortRankings('nombreJuego')}>
                                Nombre Juego
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Nivel
                            </th>
                            <th scope="col" className="py-3 px-6 cursor-pointer" onClick={() => sortRankings('puntuacion')}>
                                Puntuación
                            </th>
                            <th scope="col" className="py-3 px-6 cursor-pointer" onClick={() => sortRankings('numeroPartidas')}>
                                Número de Partidas
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Descripción
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rankings.map((rank, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="py-4 px-6">
                                    {rank.nombreJuego}
                                </td>
                                <td className="py-4 px-6">
                                    {rank.nivel}
                                </td>
                                <td className="py-4 px-6">
                                    {rank.puntuacion}
                                </td>
                                <td className="py-4 px-6">
                                    {rank.numeroPartidas}
                                </td>
                                <td className="py-4 px-6 text-center relative group">
                                    <span className="relative z-10">
                                        {rank.Descripción}
                                        <div className="hidden group-hover:block absolute top-0 left-0 transform -translate-x-full -translate-y-16 mt-1 p-2 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg text-xs w-48">
                                            0p: Principiante<br />
                                            600p: Amateur<br />
                                            1200p: Avanzado<br />
                                            1800p: Profesional<br />
                                            3000p: Maestro
                                        </div>
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default MyRankings;

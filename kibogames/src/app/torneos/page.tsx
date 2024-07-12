"use client"
import Link from 'next/link';
import { Button , Alert  } from "@material-tailwind/react"; // npm install @material-tailwind/react
import { useState, useEffect } from 'react';

const Torneo = () => {
  const [juegoSeleccionado, setJuegoSeleccionado] = useState('');
  const [torneos, setTorneos] = useState([]);
  const eloPerfil = 2000; // ELO del perfil del usuario
  const [torneosInscritos, setTorneosInscritos] = useState(new Set());
  const [orden, setOrden] = useState({ campo: '', direccion: 'asc' });
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [mensajeAlerta, setMensajeAlerta] = useState('');


  const obtenerTorneos = (juego) => {
    const torneosPorJuego = {
      'Ajedrez': [
        { nombre: 'Magnus Cup', fecha: '2024-05-15', elo: 1500, id: 1 },
        { nombre: 'Nakamaru Invitational', fecha: '2024-06-22', elo: 3000, id: 2 },
        { nombre: 'World Chess Championship', fecha: '2024-07-30', elo: 2500, id: 3 },
        { nombre: 'Open Spring Tournament', fecha: '2024-04-10', elo: 1800, id: 4 },
        { nombre: 'Autumn Classic', fecha: '2024-10-05', elo: 2000, id: 5 },
        { nombre: 'Rapid Chess Open', fecha: '2024-09-19', elo: 2200, id: 6 },
        { nombre: 'Blitz Bonanza', fecha: '2024-08-14', elo: 1700, id: 7 },
        { nombre: 'Elite Grand Tournament', fecha: '2024-11-25', elo: 2800, id: 8 },
        { nombre: 'Master Challenge Series', fecha: '2024-12-16', elo: 2600, id: 9 },
        { nombre: 'New Year Chess Gala', fecha: '2025-01-01', elo: 1900, id: 10 },
        { nombre: 'Chess Kings Invitational', fecha: '2024-02-20', elo: 2100, id: 21 },
        { nombre: 'Grandmasters Showdown', fecha: '2024-03-18', elo: 2300, id: 22 },
        { nombre: 'International Chess Fest', fecha: '2024-05-28', elo: 1800, id: 23 },
        { nombre: 'Summer Chess Carnival', fecha: '2024-07-04', elo: 1600, id: 24 },
        { nombre: 'Chess Olympiad Qualifiers', fecha: '2024-08-19', elo: 2400, id: 25 },
        { nombre: 'Fall Chess Classic', fecha: '2024-10-09', elo: 2000, id: 26 },
        { nombre: 'Rising Stars Chess Tournament', fecha: '2024-11-15', elo: 1500, id: 27 },
        { nombre: 'Winter Chess Wonderland', fecha: '2024-12-23', elo: 1700, id: 28 },
        { nombre: 'New Challengers Chess Cup', fecha: '2025-01-10', elo: 2200, id: 29 },
        { nombre: 'Spring Chess Championship', fecha: '2025-04-05', elo: 1900, id: 30 },
      ],
      '4 en raya': [
        { nombre: 'Linea Connect Battle', fecha: '2024-07-05', elo: 1000, id: 11 },
        { nombre: 'Strategic Summer Slam', fecha: '2024-08-16', elo: 1200, id: 12 },
        { nombre: 'Four to Win Cup', fecha: '2024-06-10', elo: 1500, id: 13 },
        { nombre: 'Autumn Aligners Championship', fecha: '2024-10-22', elo: 1300, id: 14 },
        { nombre: 'Winter Warline Tournament', fecha: '2024-12-05', elo: 1600, id: 15 },
        { nombre: 'Spring Strategy Showdown', fecha: '2024-03-17', elo: 1400, id: 16 },
        { nombre: 'Pro Lineup League', fecha: '2024-05-25', elo: 1100, id: 17 },
        { nombre: 'Holiday Connect Fest', fecha: '2024-11-30', elo: 1800, id: 18 },
        { nombre: 'New Beginnings Open', fecha: '2025-01-15', elo: 2000, id: 19 },
        { nombre: 'Ultimate Alignment Invitational', fecha: '2024-09-08', elo: 1700, id: 20 },
        { nombre: 'Connect Four Championship', fecha: '2024-02-14', elo: 900, id: 31 },
        { nombre: 'Four in a Line Showdown', fecha: '2024-03-22', elo: 1100, id: 32 },
        { nombre: 'Ultimate Strategy Battle', fecha: '2024-04-16', elo: 1300, id: 33 },
        { nombre: 'Midsummer Connect Fest', fecha: '2024-06-21', elo: 1200, id: 34 },
        { nombre: 'Alignment Champions League', fecha: '2024-07-29', elo: 1400, id: 35 },
        { nombre: 'Fall Strategy Tournament', fecha: '2024-09-11', elo: 1500, id: 36 },
        { nombre: 'Connect Masters Series', fecha: '2024-11-07', elo: 1600, id: 37 },
        { nombre: 'Winter Lineup Challenge', fecha: '2024-12-20', elo: 1000, id: 38 },
        { nombre: 'New Year Strategy Blast', fecha: '2025-01-09', elo: 1800, id: 39 },
        { nombre: 'Spring Connect Classic', fecha: '2025-03-30', elo: 1500, id: 40 },
      ]
    };

    return (torneosPorJuego[juego] || []).map(torneo => ({
      ...torneo,
      apto: torneo.elo <= eloPerfil,
    }));
  };

  useEffect(() => {
    setTorneos(obtenerTorneos(juegoSeleccionado));
  }, [juegoSeleccionado]);

  const ordenarTorneos = (campo) => {
    const esAscendente = orden.campo === campo && orden.direccion === 'asc';
    setTorneos(prevTorneos => [...prevTorneos].sort((a, b) => {
      if (a[campo] < b[campo]) return esAscendente ? 1 : -1;
      if (a[campo] > b[campo]) return esAscendente ? -1 : 1;
      return 0;
    }));
    setOrden({ campo, direccion: esAscendente ? 'desc' : 'asc' });
  };

  // Función para inscribirse en un torneo
  const inscribirse = (id, nombre) => {
    if (!torneosInscritos.has(id)) {
      setTorneosInscritos((prev) => new Set(prev.add(id)));
      setMensajeAlerta(`¡Inscripción exitosa en "${nombre}"!`);
      setMostrarAlerta(true);
      setTimeout(() => {
        setMostrarAlerta(false);
      }, 3000); // La alerta desaparecerá después de 3 segundos
    }
  };

  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-xl font-bold mb-4">Torneos</h1>
        <div className="mb-4">
          <select
            onChange={(e) => setJuegoSeleccionado(e.target.value)}
            value={juegoSeleccionado}
            className="border border-gray-300 rounded p-2"
          >
            <option value="">Seleccione un juego</option>
            <option value="Ajedrez">Ajedrez</option>
            <option value="4 en raya">4 en raya</option>
          </select>
        </div>

        {juegoSeleccionado && (
          <table className="w-full text-left shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="border p-2">Nombre</th>
              <th className="border p-2 cursor-pointer" onClick={() => ordenarTorneos('fecha')}>Fecha</th>
              <th className="border p-2 cursor-pointer" onClick={() => ordenarTorneos('elo')}>ELO Requerido</th>
              <th className="border p-2">Apto</th>
              <th className="border p-2">Acción</th>
            </tr>
          </thead>
          <tbody>
            {torneos.map((torneo) => (
              <tr key={torneo.id} className="hover:bg-gray-100">
                <td className="border p-2">{torneo.nombre}</td>
                <td className="border p-2">{torneo.fecha}</td>
                <td className="border p-2">{torneo.elo}</td>
                <td className="border p-2">{torneo.apto ? 'Sí' : 'No'}</td>
                <td className="border p-2 text-center">
                  {torneosInscritos.has(torneo.id) ? (
                    <Button color="red" size="sm" ripple="light" disabled>
                      Inscrito
                    </Button>
                  ) : (
                    <Link href={`/torneos/torneo`} passHref>
                      <Button
                        color="green"
                        size="sm"
                        ripple="light"
                        onClick={() => {
                          inscribirse(torneo.id, torneo.nombre);
                        }}
                        disabled={!torneo.apto}
                      >
                        Inscribirse
                      </Button>
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        )}

        {mostrarAlerta && (
          <Alert color="green" className="fixed bottom-5 right-5 z-50">
            {mensajeAlerta}
          </Alert>
        )}
      </div>
    </>
  );
};
export default Torneo;
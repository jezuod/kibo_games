// pages/TablaPuntuacionesPage.tsx

import { RankingConecta4, RankingAjedrez, RankingSerpientesEscaleras } from "@/app/constants/constants";

const TablaPuntuacionesPage = () => {
  return (
    <div>
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold text-center mb-6">Tabla de Puntuaciones</h1>
        
        {/* Tabla para Conecta 4 */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 text-center text-blue-600">Conecta 4</h2>
          <table className="w-full border border-blue-400">
            <thead>
              <tr className="bg-blue-200">
                <th className="border border-blue-400 px-4 py-2">Posición</th>
                <th className="border border-blue-400 px-4 py-2">Puntuación</th>
              </tr>
            </thead>
            <tbody>
              {RankingConecta4.map((rango, index) => (
                <tr key={index}>
                  <td className="border border-blue-400 px-4 py-2">{rango.rango}</td>
                  <td className="border border-blue-400 px-4 py-2">{rango.puntosMinimos}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4">
            Cada vez que ganas una partida ganarás 60 puntos. Si tu contrincante tiene más puntos que tú, se te sumará el 10% de la puntuación de ese jugador. Si pierdes, si el otro jugador tiene menos puntuación que tú, perderás el 10% de tus puntos, si por el contrario el otro jugador tiene más puntuación que tu, solo perderás el 5% de los puntos.
          </p>
        </div>

        {/* Tabla para Ajedrez */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 text-center text-blue-600">Ajedrez</h2>
          <table className="w-full border border-blue-400">
            <thead>
              <tr className="bg-blue-200">
                <th className="border border-blue-400 px-4 py-2">Posición</th>
                <th className="border border-blue-400 px-4 py-2">Puntuación</th>
              </tr>
            </thead>
            <tbody>
              {RankingAjedrez.map((rango, index) => (
                <tr key={index}>
                  <td className="border border-blue-400 px-4 py-2">{rango.nombre}</td>
                  <td className="border border-blue-400 px-4 py-2">{rango.puntos}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4">
            Cada vez que ganas una partida ganarás 120 puntos. Si tu contrincante tiene más puntos que tú, se te sumará el 10% de la puntuación de ese jugador. Si pierdes y si el otro jugador tiene menos puntuación que tú, perderás el 10% de tus puntos. Si por el contrario el otro jugador tiene más puntuación que tú, solo perderás el 5% de tus puntos.
          </p>
        </div>

        {/* Tabla para Serpientes y Escaleras */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 text-center text-blue-600">Serpientes y escaleras</h2>
          <table className="w-full border border-blue-400">
            <thead>
              <tr className="bg-blue-200">
                <th className="border border-blue-400 px-4 py-2">Posición</th>
                <th className="border border-blue-400 px-4 py-2">Puntuación</th>
              </tr>
            </thead>
            <tbody>
              {RankingSerpientesEscaleras.map((rango, index) => (
                <tr key={index}>
                  <td className="border border-blue-400 px-4 py-2">{rango.nombre}</td>
                  <td className="border border-blue-400 px-4 py-2">{rango.puntos}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4">
            Cuando quedes primero en una partida ganarás 60 puntos y se te sumará el diez por ciento del jugador en cuarta posición. Al que quede en cuarta posición se le restará el 10 por ciento de sus puntos. El que esté en tercera posición perderá 30 puntos solo en el caso de que su untuación no sea menor que 200 y por último el que esté en segunda posición ganará 30 puntos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TablaPuntuacionesPage;
"use client";
import { useLocalStorage } from "@uidotdev/usehooks";
import React from "react";
import { LogrosPorJuego } from "../logros/page";
import { Foto_perfil } from "../assets";
import { QuestionMarkCircleIcon } from "@heroicons/react/solid";
import { Button } from "@material-tailwind/react";

function LogrosGame({ game }: { game: string }) {
  const [logrosObtenidos, setLogrosObtenidos] = useLocalStorage<number[]>(
    "logros",
    []
  );
  const [cantLadders, setCantLadders] = useLocalStorage<number>("Escaleras", 0);
  const [cantSnakes, setCantSnakes] = useLocalStorage<number>("Serpientes", 0);

  console.log(game);

  //De los logros Obtenidos saco unicamente los que no se repiten, es decir que elimino los repetidos
  const logrosUnicosGanados = logrosObtenidos.filter(
    (value, index, self) => self.indexOf(value) === index
  );
  console.log(logrosUnicosGanados);

  const handlerResetLogros = () => {
    setLogrosObtenidos([]);
    setCantLadders(0);
    setCantSnakes(0);
  };

  return (
    <div className="p-2">
      <Button
        color="blue"
        size="sm"
        onClick={handlerResetLogros}
      >
        Reset logros
      </Button>
      <ul className="space-y-3">
        {LogrosPorJuego[game]?.map((logro) => (
          <li
            key={logro.id}
            className="flex gap-4 items-center bg-white shadow p-3 rounded-lg"
          >
            {"   "}
            {logrosUnicosGanados.includes(logro.id) ? (
              <img
                src={logro.img}
                alt="Foto de logro"
                className={"w-10 h-10 rounded-full mr-2 ml-3"}
              />
            ) : (
              <QuestionMarkCircleIcon className="h-10 w-10 rounded-full mr-2 ml-3 text-gray-500" />
            )}

            <div className="flex-grow flex flex-col">
              <span className="text-black">{logro.nombreLogro}</span>
              <span className="text-sm">{logro.descripcion}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LogrosGame;

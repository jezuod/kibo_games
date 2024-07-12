import { IVideoGame } from "@/app/models/videogame";
import connectToDatabase from "@/lib/mongodb";
import { UnderlineTabs } from "./UnderlineTabs";
import { notFound } from "next/navigation";
import Image from "next/image";
import { VideoGame } from "@/app/models/allModels";

export default async function JuegoXDescriptionPage({
                                                      params,
                                                    }: {
  params: {
    nombreJuego: string;
  };
}) {
  // Obtener el nombre del juego de los parámetros de la URL
  const name = params.nombreJuego.replaceAll("%20", " ");

  let game: IVideoGame | null = null;

  // Conectar y consultar la base de datos
  try {
    await connectToDatabase();
    const result = await VideoGame.findOne({ name: name });
    if (result) {
      game = JSON.parse(JSON.stringify(result));
    } else {
      notFound(); // Si no se encuentra el juego, retornar un error 404
    }
  } catch (error) {
    console.error("Error al conectar o consultar la base de datos:", error);
  }

  return (
      <div className="flex flex-row">
        {game ? <UnderlineTabs videogame={game} /> : <p>Cargando...</p>}
      </div>
  );
}

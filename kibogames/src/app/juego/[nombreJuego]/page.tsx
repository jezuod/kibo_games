import { connect } from "http2";
import gamingArea from "./gamingArea";
import { IVideoGame } from "@/app/models/videogame";
import connectToDatabase from "@/lib/mongodb";
import { notFound } from "next/navigation";
import { VideoGame } from "@/app/models/allModels";
import SocketGame from "./SocketGame";
import {
  ChatIcon,
  CheckCircleIcon,
  XCircleIcon,
  PlusIcon,
} from "@heroicons/react/solid";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@/app/componentes/MaterialUI/Material";
import qs from "qs";
import {
  Foto_perfil,
  MantenimientoComponent,
  MantenimientoImage,
} from "@/app/assets";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import LogrosGame from "../LogrosGame";
import Ranking from "@/app/componentes/Ranking";

function RankingGame() {
  const friendsList = [
    { id: 1, name: "Paco", status: "online", imageUrl: "/path/to/image1.jpg" },
    {
      id: 2,
      name: "Juan",
      status: "offline",
      imageUrl: "/path/to/image2.jpg",
      nivelAmistad: "Medio",
    },
    { id: 3, name: "Ana", status: "online", imageUrl: "/path/to/image3.jpg" },
    {
      id: 4,
      name: "John",
      status: "online",
      imageUrl: "/path/to/image3.jpg",
      nivelAmistad: "Medio",
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Ranking</h2>
      <ul className="space-y-3">
        {friendsList.map((friend) => (
          <li
            key={friend.id}
            className="flex items-center bg-white shadow p-3 rounded-lg"
          >
            <span className="rounded-full border-2 border-gray-600 text-center h-6 w-6 flex justify-center items-center">
              {friend.id}
            </span>
            {"   "}
            <img
              src={Foto_perfil.src}
              alt="Foto de perfil"
              className="w-10 h-10 rounded-full mr-2 ml-3"
            />
            <div className="flex-grow flex flex-col">
              <span>{friend.name}</span>
              {friend.nivelAmistad && (
                <span
                  className={`text-xs mt-1 ${
                    friend.nivelAmistad === "Alto"
                      ? "text-green-500"
                      : friend.nivelAmistad === "Medio"
                      ? "text-blue-500"
                      : "text-red-500"
                  }`}
                >
                  Amistad: {friend.nivelAmistad}
                </span>
              )}
            </div>
            {friend.status === "online" ? (
              <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
            ) : (
              <XCircleIcon className="w-5 h-5 text-gray-400 mr-2" />
            )}
            <button className="flex items-center justify-center p-2 rounded-full text-white bg-blue-500 hover:bg-blue-600">
              {friend.nivelAmistad ? (
                <PlusIcon className="w-6 h-6 " />
              ) : (
                <ChatIcon className="w-6 h-6" />
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function JuegoXPage({
  params,
}: {
  params: {
    nombreJuego: String;
  };
}) {
  const session = await getServerSession(authConfig);

  const name = params.nombreJuego.replaceAll("%20", " ");

  await connectToDatabase();
  var result = await VideoGame.findOne({ name: name });
  var game = JSON.parse(JSON.stringify(result)) as IVideoGame;
  if (!game) {
    // notFound()
  }

  const options = {
    email: session?.user?.email! + new Date().getTime(),
    room: "game",
  };
  console.log(options); //TODO: REVISAR SI MANDA MAS DE UNO. SINO HACERLO CON USEeffect desde el client
  const url = game.gameUrl + "?" + qs.stringify(options);
  return (
    <>
      {!game.availableToPlay && (
        <div className="h-32 flex items-center justify-center">
          <h1 className="font-bold">
            Este juego no está disponible para jugar todavia
          </h1>
        </div>
      )}

      {game.availableToPlay && (
        <div className="w-full h-full ">
          <div className="flex w-full h-full ">
            <SocketGame email={options.email} />

            <div className="h-[90vh] w-[70vw] flex items-center justify-center">
              <iframe
                src={url}
                className="w-full h-full "
                style={{ transform: "scale(1)" }}
              />
            </div>
            <div className="grid grid-rows-2 max-w-[30vw] h-full m-0 p-0 ">
              <div className="min-h-[50vh] max-h-[50vh] m-0 overflow-hidden">
                <Tabs
                  value="Logros"
                  className="border border-black-300 rounded-xl "
                >
                  <TabsHeader className="flex rounded  overflow-hidden">
                    <Tab value="Logros">Logros</Tab>
                    <Tab value="Ranking">Ranking</Tab>
                  </TabsHeader>
                  <TabsBody className="overflow-auto min-h-[40vh] max-h-[40vh] m-0">
                    <TabPanel value="Ranking">
                      <Ranking gameName={name} />
                    </TabPanel>
                    <TabPanel value="Logros">
                      <LogrosGame game={name} />
                    </TabPanel>
                  </TabsBody>
                </Tabs>
              </div>
              <div className="min-h-[40vh] max-h-[40vh] relative">
                <hr className="text-black w-full"></hr>
                <h2>Chat</h2>

                  <div className="block w-full relative bg-transparent overflow-auto h-4/5">
                    <div className="flex flex-col space-y-2">
                      <div className="flex justify-end">
                        <div className="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
                          ¿Estás listo para el torneo de ajedrez?
                        </div>
                      </div>

                      <div className="flex">
                        <div className="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
                          Sí, estoy emocionado por jugar. ¿Ya te registraste?
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
                          Todavía no, pero planeo hacerlo esta tarde. ¿Has
                          practicado un poco?
                        </div>
                      </div>

                      <div className="flex">
                        <div className="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
                          Sí, he estado practicando algunas aperturas. ¿Cuál es
                          tu estrategia para el torneo?
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
                          Voy a intentar mantenerme sólido en la apertura y
                          buscar oportunidades en el medio juego. ¿Te parece
                          bien?
                        </div>
                      </div>

                      <div className="flex">
                        <div className="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
                          Suena bien. ¡Vamos a dar lo mejor de nosotros y
                          llevarnos la victoria!
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
                          ¡Exactamente!, pero mientras te ganare en esta partida
                        </div>
                      </div>

                      <div className="flex">
                        <div className="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
                          lo dudo, tu fin esta cerca...
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bg-white flex items-center bottom-0 m-0 p-0 w-full h-1/5 mb-0 z-10">
                    <input
                      type="text"
                      placeholder="Escribe tu mensaje..."
                      className="flex-1 border rounded-full px-4 focus:outline-none"
                    />
                    <button className="bg-blue-500 text-white rounded-full p-2 ml-2 hover:bg-blue-600 focus:outline-none">
                      Enviar {/* Aquí puedes colocar cualquier texto o ícono */}
                    </button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

"use client";
import { Snakes } from "@/app/assets";
import { DialogLOGROS } from "@/app/componentes/MaterialUI/DialogLOGROS";
import { DialogPARTIDA_GANADA } from "@/app/componentes/MaterialUI/DialogPARTIDA_GANADA";
import { DialogPARTIDA_PERDIDA } from "@/app/componentes/MaterialUI/DialogPARTIDA_PERDIDA";
import { ILogro } from "@/app/logros/constantes";
import { LogrosPorJuego } from "@/app/logros/page";
import { useLocalStorage } from "@uidotdev/usehooks";
import { set } from "mongoose";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";


const LogrosMatcherSerpientes=[
  {
    id: 11,
    cantSnakes: Infinity,
    cantLadders: 1,
  },
  {
    id: 12,
    cantSnakes: 1,
    cantLadders: Infinity,
  },
  {
    id: 17,
    cantSnakes: 3,
    cantLadders: Infinity,
  },
  {
    id: 18,
    cantSnakes: Infinity,
    cantLadders: 3,
  }
]



const SocketGame = ({ email }: { email: string }) => {

  const [logrosObtenidos, setLogrosObtenidos] = useLocalStorage<number[]>("logros", []);
  const [currentLogro, setCurrentLogro] = useState<ILogro|undefined>(undefined);


  const [socket, setSocket] = useState<Socket | null>(null);
  const [message, setMessage] = useState<string>("");
  const [emailSocketId, setEmailSocketId] = useState<string>("");

  const [openVictory, setOpenVictory] = useState(false);
  const [openDefeat, setOpenDefeat] = useState(false);
  const [openLogro, setOpenLogro] = useState(false);



  const [cantLadders, setCantLadders] = useLocalStorage<number>("Escaleras",0);
  const [cantSnakes, setCantSnakes] = useLocalStorage<number>("Serpientes",0);

  //TODO: URGENTE REVISAR LAS CONNEXIONES ARCTIVAS EN EL SERVIDOR CUANDO SE HACE UN RESTART!! PORQUE EL EMAIL NO SE ACTUALIZA CORRECTAMENTE

  useEffect(() => {
    setEmailSocketId(email);
    console.log(email);

    setLogrosObtenidos([]);
    setCantLadders(0);
    setCantSnakes(0);


    const newSocket = io("http://localhost:3003", {
      reconnection: true,
      reconnectionDelayMax: 10000,
    });

    console.log("SOCKET ID:",newSocket.id);

    setSocket(newSocket);

    newSocket.on("reactListenerWinner", (winner: string) => {
      console.log(winner);
      setMessage(winner);

      if (email === winner) {
        setOpenVictory(true);
      } else {
        setOpenDefeat(true);
      }
    });

    newSocket.on("reactListenerEvent", (emailWinner:string, eventName:string) => {

      if(emailWinner === email){
        if(eventName === "ladder"){
          console.log("LADDER");
          setCantLadders(cantLadders+1);
        }else if(eventName === "snake"){
          console.log("SNAKE");
          setCantSnakes(cantSnakes+1);
        }
      }
    });


    console.log("SOCKET ID:",newSocket.id);


    console.log("SocketGame mounted");

    return () => {
      newSocket.disconnect();
    };

  }, []);

  useEffect(() => {
    console.log("ISOPEN_logro", openLogro);
    console.log("CANT ESCALERAS:",cantLadders);
    console.log("CANT SERPIENTES:",cantSnakes);

    const condicionLogroObtenido = LogrosMatcherSerpientes.find((logro) => logro.cantLadders === cantLadders || logro.cantSnakes === cantSnakes);
    console.log(condicionLogroObtenido);  
    if(!condicionLogroObtenido){
      return;
    }
    
    const socketLogroObtenido = LogrosPorJuego['Escaleras y serpientes'].find((logro) => logro.id === condicionLogroObtenido?.id);  

    console.log(socketLogroObtenido);
    if(socketLogroObtenido && !logrosObtenidos.includes(socketLogroObtenido.id)){
      console.log("LOGRO OBTENIDO:",socketLogroObtenido.id);
      setCurrentLogro(socketLogroObtenido);
      logrosObtenidos.push(socketLogroObtenido.id);
      setLogrosObtenidos([...logrosObtenidos, socketLogroObtenido.id]);

      console.log("LOGROS OBTENIDOS:",logrosObtenidos);


      setOpenLogro(true);

    }

  }, [cantLadders,cantSnakes,openLogro,logrosObtenidos,currentLogro,setCurrentLogro,setLogrosObtenidos]);

  return (
    <>
      <DialogPARTIDA_GANADA isOpen={openVictory} noButton={true} />
      <DialogPARTIDA_PERDIDA isOpen={openDefeat} noButton={true} />
      <DialogLOGROS logroObtenido={currentLogro} isOpen={openLogro} setOpen={setOpenLogro} noButton={true} />
    </>
  );
};

export default SocketGame;

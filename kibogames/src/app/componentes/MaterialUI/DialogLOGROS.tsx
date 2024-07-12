"use client";
import React, { use, useEffect } from "react";
import { Logro } from "../../assets";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { LogrosPorJuego } from "@/app/logros/page";
import { set } from "mongoose";
import { ILogro } from "@/app/logros/constantes";

export function DialogLOGROS({
  logroObtenido = undefined,
  isOpen = false,
  setOpen,
  noButton = true,
}: {
  logroObtenido: ILogro | undefined;
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  noButton: boolean;
}) {

  const handleOpen = () => setOpen(!isOpen);


  return (
    <>
      <Dialog open={isOpen}  handler={handleOpen} style={{ minWidth: "300px" }}>
        <DialogHeader style={{ justifyContent: "center" }}>
          Logro obtenido: {logroObtenido && logroObtenido.nombreLogro}
        </DialogHeader>
        <DialogBody>
          {logroObtenido && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={logroObtenido.img}
                alt="Logro GIF"
                style={{ width: "50%", justifyContent: "center" }}
              />
              <p style={{ justifyContent: "center", marginTop: "10px" }}>
                {logroObtenido.descripcion}
              </p>
            </div>
          )}
        </DialogBody>
        <DialogFooter style={{ justifyContent: "center" }}>
          <Button
            color="blue"
            onClick={() => setOpen(false)}
            buttonType="filled"
            className="mr-4"
          >
            <span>Aceptar</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

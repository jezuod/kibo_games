"use client"
import React from "react";
import { Victoria} from "../../assets"
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export function DialogPARTIDA_GANADA({isOpen=false, noButton=true}:{isOpen:boolean, noButton:boolean}) {
  const [open, setOpen] = React.useState(isOpen);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} variant="gradient" className={noButton ? "hidden" : ""}>
        ¡Partida ganada!
      </Button>
      <Dialog open={open} handler={handleOpen} style={{ minWidth: '300px' }}>
        <DialogHeader style={{ justifyContent: 'center' }}>¡Felicidades!</DialogHeader>
        <DialogBody style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={Victoria.src} alt="Victoria GIF" style={{ width: "50%", justifyContent: 'center' }}/>
            <p style={{ justifyContent: 'center', marginTop: '10px' }}>
              Has ganado la partida. ¡Excelente trabajo! Continúa así y sigue mejorando tus habilidades.
            </p>
          </div>
        </DialogBody>
        <DialogFooter style={{ justifyContent: 'center' }}>
          <Button 
            color="blue" 
            onClick={handleOpen}
            buttonType="filled"
            className="mr-4"
          >
            <span>Confirmar</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

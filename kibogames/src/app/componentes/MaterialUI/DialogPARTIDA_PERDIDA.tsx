"use client"
import React from "react";
import { Derrota} from "../../assets"
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export function DialogPARTIDA_PERDIDA({isOpen=false, noButton=true}:{isOpen:boolean, noButton:boolean}) {
  const [open, setOpen] = React.useState(isOpen);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} variant="gradient" className={noButton ? "hidden" : ""}>
        Partida Perdida
      </Button>
      <Dialog open={open} handler={handleOpen} style={{ minWidth: '300px' }}>
        <DialogHeader style={{ justifyContent: 'center' }}>Partida Perdida</DialogHeader>
        <DialogBody style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={Derrota.src} alt="Derrota GIF" style={{ width: "50%", justifyContent: 'center' }}/>
              <p style={{ justifyContent: 'center', marginTop: '10px'}}>
                Has perdido la partida. ¡No te desanimes! Aprende de esta experiencia
                y sigue mejorando tus habilidades.
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
            <span>Volver a intentarlo</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
"use client"
import React from "react";
import { Rendicion} from "../../assets"
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export function DialogRENDIRME() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Rendirse
      </Button>
      <Dialog open={open} handler={handleOpen} style={{ minWidth: '300px' }}>
        <DialogHeader style={{ justifyContent: 'center' }}>Rendirse</DialogHeader>
        <DialogBody style={{ textAlign: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={Rendicion.src} alt="Rendicion GIF" style={{ width: "50%", justifyContent: 'center' }}/>
              <p style={{ justifyContent: 'center', marginTop: '10px'}}>
                ¿Estás seguro de que deseas rendirte? Esto dará por terminada la partida.
               </p>
        </div>
        </DialogBody>
        <DialogFooter style={{ justifyContent: 'center' }}>
          <Button
            type='button'
            onClick={handleOpen}
            className='text-white bg-red-700 hover:bg-red-800 mr-4'
          >
            <span>Cancelar</span>
          </Button>
          <Button 
            color="blue" 
            onClick={handleOpen}
            buttonType="filled"
            className="mr-4"
          >
            <span>Rendirse</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
import React from 'react'
import { DialogDefault } from '../componentes/MaterialUI/DialogDefault'
import { DialogPARTIDA_GANADA } from '../componentes/MaterialUI/DialogPARTIDA_GANADA'
import { DialogRENDIRME } from '../componentes/MaterialUI/DialogRENDIRME'
import { DialogPARTIDA_PERDIDA } from '../componentes/MaterialUI/DialogPARTIDA_PERDIDA'
import { DialogLOGROS } from '../componentes/MaterialUI/DialogLOGROS'

function DialogosPage() {
    return (
        <>
            <div>DialogosPage</div>

            <DialogDefault />
            <DialogPARTIDA_GANADA />
            <DialogRENDIRME />
            <DialogPARTIDA_PERDIDA />
            <DialogLOGROS isOpen={true}  logroId={17}/>
        </>
    )
}

export default DialogosPage
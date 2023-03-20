import React, { useState } from "react";

import { IAnagrafica } from '../interfacce/IAnagrafica'

import { Inserisci } from "./Inserisci";

import { Dettaglio } from "./Dettaglio";

import logo from '../logoCP.png';

const grigio: any = {
    backgroundColor: "white"
}


export const Lista = () => {

    const [listato, setListato] = useState<Array<IAnagrafica>>([]);

    const aggiungiAnagrafica = (nuovaAnagrafica: IAnagrafica) => {
        nuovaAnagrafica.numero = listato.length + 1
        setListato([...listato, nuovaAnagrafica]);
        console.log(listato);
    }



    return (
        <div style={grigio}>
        <img src={logo} width="200" height="90" />
        <br></br>
        <br></br>
        {/* <h3>Numero Persone in Archivio:{listato.length}</h3> */}
            <Inserisci metodoAggiungi={aggiungiAnagrafica}></Inserisci>
            
            {
                listato.map(
                    (anagrafica: IAnagrafica) => {
                        return <Dettaglio singola={anagrafica} key={anagrafica.numero}></Dettaglio>
                    }
                )
            }
            <br /><br />
        </div>
    )
}
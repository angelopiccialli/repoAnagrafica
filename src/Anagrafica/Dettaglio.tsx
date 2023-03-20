import { type } from "os";
import React, { useState } from "react";
import { IAnagrafica } from "../interfacce/IAnagrafica";


const colore: any = {
    backgroundColor: 'lightgray'
}

type IDet = {
    singola: IAnagrafica
}

export const Dettaglio = ({ singola }: IDet) => {

    const [vedi, setVedi] = useState<boolean>(false)

    let dettagli: any = "";

    dettagli = 
        <label htmlFor="">
            <label htmlFor="">{singola.nome}</label>
            <label htmlFor="">{singola.cognome}</label>
            <label htmlFor="">{singola.genere}</label>
            <label htmlFor="">{singola.data}</label>
            <label htmlFor="">{singola.codiceFiscale}</label>
            <label htmlFor="">{singola.indirizzo}</label>
            <label htmlFor="">{singola.provincia}</label>
            <label htmlFor="">{singola.citta}</label>
            <label htmlFor="">{singola.cap}</label>
            <label htmlFor="">{singola.qualifica}</label>
            <label htmlFor="">{singola.ruolo}</label>
            <label htmlFor="">{singola.email}</label>
        </label>


    return (
        <div style={colore}>
            <table>
                <tr>
                    <th>Nome</th>
                    <th>Cognome</th>
                    <th>Genere</th>
                    <th>Data</th>
                    <th>Codice Fiscale</th>
                    <th>Indirizzo</th>
                    <th>Provincia</th>
                    <th>Città</th>
                    <th>Cap</th>
                    <th>Qualifica</th>
                    <th>Ruolo</th>
                    <th>E-Mail</th>
                </tr>
                <tr>
                    <td>{singola.nome}</td>
                    <td>{singola.cognome}</td>
                    <td>{singola.genere}</td>
                    <td>{singola.data}</td>
                    <td>{singola.codiceFiscale}</td>
                    <td>{singola.indirizzo}</td>
                    <td>{singola.provincia}</td>
                    <td>{singola.citta}</td>
                    <td>{singola.cap}</td>
                    <td>{singola.qualifica}</td>
                    <td>{singola.ruolo}</td>
                    <td>{singola.email}</td>
                </tr>
            </table>
        </div>
    )
}

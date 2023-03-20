import React, { useState } from "react";

import { IAnagrafica } from "../interfacce/IAnagrafica";
import { Genere } from '../Dati/Genere';
import { Qualifica } from '../Dati/Qualifica';
import { Ruolo } from '../Dati/Ruolo';
import { Comuni } from '../Dati/Comuni';


import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "../table.css";

const orange: any = {
    backgroundColor: "#e9e9e9"
};

interface IAddAnagrafica {
    metodoAggiungi: (newAnagrafica: IAnagrafica) => void
}


export const Inserisci: React.FC<IAddAnagrafica> = ({ metodoAggiungi }) => {

    const [nome, setNome] = useState<string>("");
    const [cognome, setCognome] = useState<string>("");
    const [genere, setGenere] = useState<string>("");
    const [data, setData] = useState<string>("");
    const [codiceFiscale, setCodiceFiscale] = useState<string>("");
    const [indirizzo, setIndirizzo] = useState<string>("");
    const [provincia, setProvincia] = useState<string>("");
    const [citta, setCitta] = useState<string>("");
    const [cap, setCap] = useState<string>("");
    const [qualifica, setQualifica] = useState<string>("");
    const [ruolo, setRuolo] = useState<string>("");
    const [email, setEmail] = useState<string>("");


    const [startDate, setStartDate] = useState(new Date());
    const [reg, setREg] = useState<number>(0);

    return (
        <Form>
            
                <div style={orange}>
                <h1>DIPENDENTE</h1>
                <h3>DATI ANAGRAFICI</h3>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCodiceFiscale">
                        <Form.Label >Codice Fiscale *</Form.Label>
                        <Form.Control id="codiceFiscale" placeholder="Codice Fiscale" onChange={(tagdescr) => { setCodiceFiscale(tagdescr.target.value) }} />
                    </Form.Group>
                </Row>


                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridNome">
                        <Form.Label>Nome *</Form.Label>
                        <Form.Control id="nome" placeholder="Nome" onChange={(tagdescr) => { setNome(tagdescr.target.value) }} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCognome">
                        <Form.Label>Cognome *</Form.Label>
                        <Form.Control id="cognome" placeholder="Cognome" onChange={(tagdescr) => { setCognome(tagdescr.target.value) }} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridGenere">
                        <Form.Label>Genere</Form.Label>
                        <Form.Select id="genere" defaultValue="Seleziona Genere..." onChange={(tagdescr) => { setGenere(tagdescr.target.value) }}>
                            <option>Genere...</option>
                            {
                                Genere.map(
                                    (ge) => {
                                        return <option value={ge.descrizione} key={ge.id}>{ge.descrizione}</option>
                                    }
                                )
                            }
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="dob">
                        <Form.Label>Data di Nascita</Form.Label>
                        <Form.Control id="data" type="date" name="dob" placeholder="Data di Nascita" onChange={(tagdescr) => { setData(tagdescr.target.value) }} />
                    </Form.Group>

                </Row>


                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridIndirizzo">
                        <Form.Label>Indirizzo</Form.Label>
                        <Form.Control id="indirizzo" placeholder="Indirizzo" onChange={(tagdescr) => { setIndirizzo(tagdescr.target.value) }} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridProvincia">
                        <Form.Label>Provincia</Form.Label>
                        <Form.Select id="provincia" defaultValue="Seleziona Provincia..." onChange={(tagdescr) => { setProvincia(tagdescr.target.value) }}>
                            <option value="">Provincia...</option>
                            {
                                Comuni.map((qa) => {
                                    const options = [];
                                    for (let i=0; i < qa.regioni.length; i++) {
                                            for (let j=0; j < qa.regioni[i].province.length; j++) {

                                                     options.push(<option value={qa.regioni[i].province[j].nome}>
                                                                    {qa.regioni[i].province[j].nome}
                                                                </option>); 
                                                                console.log(qa.regioni[i].province[j].nome);
                                            }
                                               
                                    }return options;
                                })
                            }
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCitta">
                        <Form.Label>Città</Form.Label>
                        <Form.Select id="citta" defaultValue="Seleziona Città..." onChange={(tagdescr) => { setCitta(tagdescr.target.value) }}>
                            <option value="">Città...</option>
                            {
                                Comuni.map((qa) => {
                                    const options = [];
                                    for (let i=0; i < qa.regioni.length; i++) {
                                        for (let j=0; j < qa.regioni[i].province.length; j++) {
                                            for (let k=0; k < qa.regioni[i].province[j].comuni.length; k++) {
                                                    options.push(<option value={qa.regioni[i].province[j].comuni[k].nome}>
                                                        {qa.regioni[i].province[j].comuni[k].nome}
                                                         </option>);
                                              }}
                                    }return options;
                                })
                            }
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCap">
                        <Form.Label>Cap</Form.Label>
                        <Form.Select id="cap" defaultValue="Seleziona Cap..." onChange={(tagdescr) => { setCap(tagdescr.target.value) }}>
                            <option value="">Cap...</option>
                            {
                                Comuni.map((qa) => {
                                    const options = [];
                                    for (let i=0; i < qa.regioni.length; i++) {
                                        for (let j=0; j < qa.regioni[i].province.length; j++) {
                                            for (let k=0; k < qa.regioni[i].province[j].comuni.length; k++) {
                                                    options.push(<option value={qa.regioni[i].province[j].comuni[k].cap}>
                                                        {qa.regioni[i].province[j].comuni[k].cap}
                                                         </option>);
                                              }}
                                    }return options;
                                })
                            }
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridQualifica">
                        <Form.Label>Qualifica</Form.Label>
                        <Form.Select id="qualifica" defaultValue="Seleziona Qualifica..." onChange={(tagdescr) => { setQualifica(tagdescr.target.value) }} >
                            <option>Seleziona Qualifica...</option>
                            {
                                Qualifica.map(
                                    (qa) => {
                                        return <option value={qa.descrizione} key={qa.id}>{qa.descrizione}</option>
                                    }
                                )
                            }
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridRuolo">
                        <Form.Label>Ruolo</Form.Label>
                        <Form.Select id="ruolo" defaultValue="Seleziona Ruolo..." onChange={(tagdescr) => { setRuolo(tagdescr.target.value) }} >
                            <option>Seleziona Ruolo...</option>
                            {
                                Ruolo.map(
                                    (ru) => {
                                        return <option value={ru.descrizione} key={ru.id}>{ru.descrizione}</option>
                                    }
                                )
                            }
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>E-Mail</Form.Label>
                        <Form.Control id="email" type="email" placeholder="E-Mail" onChange={(tagdescr) => { setEmail(tagdescr.target.value) }} />
                    </Form.Group>
                </Row>

                <Button variant="secondary" type="reset"  value="Reset" style={{ marginRight: '10px' }}>Annulla</Button>

                <Button variant="primary"
                    onClick={
                        () => {
                            if (nome && cognome && codiceFiscale) {
                                let nuovafattura: IAnagrafica = {
                                    nome: nome,
                                    cognome: cognome,
                                    genere: genere,
                                    data: data,
                                    codiceFiscale: codiceFiscale,
                                    indirizzo: indirizzo,
                                    provincia: provincia,
                                    citta: citta,
                                    cap: cap,
                                    qualifica: qualifica,
                                    ruolo: ruolo,
                                    email: email,
                                    numero: 0
                                }

                                metodoAggiungi(nuovafattura);
                            } else {
                                alert("Inserire Campi Obbligatori!");
                            }
                        }
                    }>
                    Salva
                </Button>

                <div>------------------------------------------------------</div>
                <div>
                    <h2>TABELLA ANAGRAFICA</h2>
                </div>
                <div>------------------------------------------------------</div>
            </div>
        </Form>
    )

}
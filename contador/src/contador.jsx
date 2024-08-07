import React, {Component, useState} from "react";
import Botoes from "./botoes";
import Display from "./display";
import Passo from "./Passo"

function Contador() {
    const [numero, setNumero] =  useState(0);
    const [passo, setPasso] = useState(0);

    const inc = () => {
        setNumero(numero + passo);
    }

    const dec = () => {
        setNumero(numero - passo);
    }

    return(
        <div className="contador">
            <h1>Contador Plus Tabajara</h1>
            <Botoes inc={inc} dec={dec}/>
            <Display numero={numero}/>
            <Passo passo={passo} setPasso={setPasso}/>

        </div>
    )
}

export default Contador;


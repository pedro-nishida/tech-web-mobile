import React, {Component,useState} from "react";

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
            <h2>{numero}</h2>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
            <br></br>
            <br></br>

            <input
                id="passoInput"
                type="number"
                value={passo}
                onChange={e => setPasso(+e.target.value)}
            />
        </div>
    )
}

export default Contador;


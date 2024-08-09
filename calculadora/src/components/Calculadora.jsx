import React, {useState} from "react";
import Display from "../components/Display";
import Botoes from "../components/Botoes";

function Calculadora() {
    const [primeiroNumero, setPrimeiroNumero] = useState(0);
    const [segundoNumero, setSegundoNumero] = useState(0);
    const [resultado, setResultado] = useState(0);

    //4 operacoes matemátcas
    const somar = () => {
        setResultado(primeiroNumero + segundoNumero);
    }

    const subtrair = () => {
        setResultado(primeiroNumero - segundoNumero);
    }
    
    const multiplicar = () => {
        setResultado(primeiroNumero * segundoNumero);
    }
    
    const dividir = () => {
        setResultado(primeiroNumero / segundoNumero);
    }

    return(
        <div className="calculadora">
            <h1>Calculadora</h1>
            <Display resultado={resultado} />
            <input type="number" value={primeiroNumero} onChange={e => setPrimeiroNumero(Number(e.target.value))} />
            <input type="number" value={segundoNumero} onChange={e => setSegundoNumero(Number(e.target.value))} />
            <br />
            <Botoes 
                multiplicar={multiplicar} 
                dividir={dividir} 
                somar={somar} 
                subtrair={subtrair} 
                primeiroNumero={setPrimeiroNumero} 
                segundoNumero={setSegundoNumero} 
            />
        </div>
    )

}

export default Calculadora;
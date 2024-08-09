import React, { useState } from "react";
import Display from "../components/Display";
import Botoes from "../components/Botoes";

function Calculadora() {
    const [currentInput, setCurrentInput] = useState("");
    const [operation, setOperation] = useState(null);
    const [previousInput, setPreviousInput] = useState("");
    const [resultado, setResultado] = useState(0);

    const handleNumberClick = (number) => {
        setCurrentInput(currentInput + number);
    };

    const handleOperationClick = (op) => {
        if (currentInput === "") return;
        setOperation(op);
        setPreviousInput(currentInput);
        setCurrentInput("");
    };

    const handleEqualsClick = () => {
        if (currentInput === "" || previousInput === "") return;
        const num1 = parseFloat(previousInput);
        const num2 = parseFloat(currentInput);
        let res = 0;
        switch (operation) {
            case "+":
                res = num1 + num2;
                break;
            case "-":
                res = num1 - num2;
                break;
            case "*":
                res = num1 * num2;
                break;
            case "/":
                res = num1 / num2;
                break;
            default:
                return;
        }
        setResultado(res);
        setCurrentInput(res.toString());
        setPreviousInput("");
        setOperation(null);
    };

    const handleClearClick = () => {
        setCurrentInput("");
        setPreviousInput("");
        setOperation(null);
        setResultado(0);
    };

    return (
        <div className="calculadora">
            <h1>Calculadora</h1>
            <Display resultado={currentInput || resultado} />
            <Botoes
                handleNumberClick={handleNumberClick}
                handleOperationClick={handleOperationClick}
                handleEqualsClick={handleEqualsClick}
                handleClearClick={handleClearClick}
            />
        </div>
    );
}

export default Calculadora;
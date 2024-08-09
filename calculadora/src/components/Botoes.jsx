import React from "react";

function Botoes({ handleNumberClick, handleOperationClick, handleEqualsClick, handleClearClick }) {
    return (
        <div className="buttons">
            <div className="number-buttons">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
                    <button key={number} onClick={() => handleNumberClick(number.toString())}>
                        {number}
                    </button>
                ))}
            </div>
            <div className="operation-buttons">
                {["+", "-", "*", "/"].map((op) => (
                    <button key={op} onClick={() => handleOperationClick(op)}>
                        {op}
                    </button>
                ))}
            </div>
            <button onClick={handleEqualsClick}>=</button>
            <button onClick={handleClearClick}>C</button>
        </div>
    );
}

export default Botoes;
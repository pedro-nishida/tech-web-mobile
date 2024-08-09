import React from "react";

function Botoes (props) {
    return(
        <>
            <button onClick={props.somar}>+</button>
            <button onClick={props.subtrair}>-</button>
            <button onClick={props.multiplicar}>*</button>
            <button onClick={props.dividir}>/</button>
            <br></br>
            <br></br>
        </>
    )
}

export default Botoes;
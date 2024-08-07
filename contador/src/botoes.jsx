import React, {Component, useState} from "react";

function Botoes (props) {
    return(
        <>
            <button onClick={props.inc}>+</button>
            <button onClick={props.dec}>-</button>
            <br></br>
            <br></br>
        </>
    )
}

export default Botoes;
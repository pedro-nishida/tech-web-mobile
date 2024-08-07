import React, {Component, useState} from "react";

function Passo (props) {
    <div className="Passo">
        <input
            id="Passo"
            value={props.passo}
            onChange={e => props.setPasso(+e.target.value)}
        />
    </div>
}

export default Passo;
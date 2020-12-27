import React from "react";

export default function Ball({id, svg, onClick}) {
    const altMsg = id.toString() + " ball";

    return (
        <div id={id}>
            <img src={svg} alt={altMsg} onClick={onClick}/>
        </div>
    );
}

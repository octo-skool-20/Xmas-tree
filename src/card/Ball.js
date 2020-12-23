import React, {useState} from "react";

export default function Ball({id, svg}) {
    const altMsg = id + " ball";

    return (
        <div id={id}>
            <img src={svg} alt={altMsg}/>
        </div>
    );
}

import React, {useState} from "react";

export default function Ball({id, svg, onClick, photo}) {
    const altMsg = id.toString() + " ball";

    const [onHoverSvg, setOnHoverSvg] = useState(svg);

    return (
        <div id={id} >
            <img src={onHoverSvg} alt={altMsg}
                 onClick={onClick}
                 onMouseOver={() => setOnHoverSvg(photo)}
                 onMouseOut={() => setOnHoverSvg(svg)}
            />
        </div>
    );
}

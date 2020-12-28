import React, {useState} from "react";

export default function Ball({id, svg, onClick, photo}) {
    const altMsg = id.toString() + " ball";

    const [onHoverSvg, setOnHoverSvg] = useState(svg);

    const onBallHover = function (photo) {
        setOnHoverSvg(photo)
    }

    return (
        <div id={id} style={{ cursor: 'pointer' }}>
            <img src={onHoverSvg} alt={altMsg}
                 onClick={onClick}
                 onMouseOver={() => onBallHover(photo)}
                 onMouseOut={() => setOnHoverSvg(svg)}
            />
        </div>
    );
}

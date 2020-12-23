import React from "react";
import present from "../assets/christmas-present-svg copie.png"

export default function (props){
    let presentStyle = {
        flex: 1,
        width: 30,
        height: 30,
        resizeMode: 'contain',
        position: 'absolute',
        top: 700,
        left: props.left,
    }

    return (
            <img id="present" src={present} alt="christmas tree png" style={presentStyle}/>
    );
}

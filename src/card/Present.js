import React from "react";
import present from "../assets/christmas-present-svg copie.png"

export default function (props){
    let presentStyle = {
        flex: 1,
        width: "5%",
        height: "5%",
        resizeMode: 'contain',
        position: 'absolute',
        bottom: props.bottom,
        left: props.left,
    }

    return (
            <img id="present" src={present} alt="cadeaux" style={presentStyle}/>
    );
}

import React from "react";
import present from "../assets/christmas-present-svg copie.png"

export default function (props){
    let presentStyle = {
        flex: 1,
        width: 30,
        height: 30,
        resizeMode: 'contain',
        position: 'absolute',
        bottom: "5%",
        left: props.left,
    }

    return (
            <img id="present" src={present} alt="cadeaux" style={presentStyle}/>
    );
}

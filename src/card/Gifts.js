import React from "react"
import gifts from "../assets/gifts3.png"

export default function Gifts ({style}) {


    return (
        <div id={"giftsDiv"}>
        <img src={gifts} style={style}/>
        </div>
    )
}

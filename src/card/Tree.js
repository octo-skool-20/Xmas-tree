import React from "react";
import christmas_tree from "../assets/christmas_tree.png"
import Ball from "./Ball";

export default function Tree() {
    let treeStyle = {
        width:'auto',
        height:'100%',
        maxWidth:'100%'
    }

    return (
        <div id="xMasTree">
            <img src={christmas_tree} alt="christmas tree png" style={treeStyle}/>
        </div>
    );
}

import React from "react";
import christmas_tree from "../assets/christmas_tree.png"
import Ball from "./Ball";
import Present from "./Present"

export default function Tree() {
    let treeStyle = {
        width:'auto',
        height:'100%',
        maxWidth:'100%'
    }

    return (
        <>
            <Ball bgColor="#fcc2e9" />
            <img id="tree" src={christmas_tree} alt="christmas tree png" style={treeStyle}/>
            <div>
                <Present left={"20%"} bottom={"5%"}/>
                <Present left={"10%"} bottom={"5%"}/>
                <Present left={"55%"} bottom={"5%"}/>
                <Present left={"65%"} bottom={"5%"}/>
            </div>
        </>
    );
}

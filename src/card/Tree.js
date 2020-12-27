import React from "react";
import Reward from 'react-rewards';

import christmas_tree_no_star from "../assets/christmas_tree_no_star.png";
import Star from "./Star";
import Ball from "./Ball";
import FloBall from "../assets/balls/FloBall.svg";
import MasiBall from "../assets/balls/MasiBall.svg";
import BernBall from "../assets/balls/BernBall.svg";

export default function Tree({id, svg, onClick, setIsOpen, setIdSkooler}) {
    let treeStyle = {
        display: 'block',
        margin: '0 auto',
        width:'auto',
        height:'100%',
        maxWidth:'100%'
    }

    return (
        <div id="xMasTree">
            <Star/>
            <img src={christmas_tree_no_star} alt="christmas tree png" style={treeStyle}/>
            <Ball id={id} svg={svg} onClick={onClick}/>
            <Ball id="masi" svg={MasiBall} onClick={() => {setIsOpen(true);setIdSkooler("masi")}}/>
            <Ball id="bern" svg={BernBall} onClick={() => {setIsOpen(true);setIdSkooler("bern")}}/>

        </div>
    );
}

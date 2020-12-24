import React from "react";
import Reward from 'react-rewards';

import christmas_tree_no_star from "../assets/christmas_tree_no_star.png";
import Star from "./Star";

export default function Tree() {
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
        </div>
    );
}

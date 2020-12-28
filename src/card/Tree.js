import React from "react";
import Reward from 'react-rewards';
import christmas_tree_no_star from "../assets/christmas_tree_no_star.png";
import Star from "./Star";
import Ball from "./Ball";
import ChazBall from "../assets/balls/ChazBall.svg";
import BernBall from "../assets/balls/BernBall.svg";
import BoxiBall from "../assets/balls/BoxiBall.svg";
import CemeBall from "../assets/balls/CemeBall.svg";
import ElriBall from "../assets/balls/ElriBall.svg";
import JamuBall from "../assets/balls/JamuBall.svg";
import JufeBall from "../assets/balls/JufeBall.svg";
import LelaBall from "../assets/balls/LelaBall.svg";
import MasiBall from "../assets/balls/MasiBall.svg";
import SuliBall from "../assets/balls/SuliBall.svg";
import VagaBall from "../assets/balls/VagaBall.svg";
import WajiBall from "../assets/balls/WajiBall.svg";
import KramBall from "../assets/balls/KramBall.svg";

import logo from "../assets/octo_logo.png";
import bern from "../assets/photos/bern.png";
import chaz from "../assets/photos/chaz.png";
import jamu from "../assets/photos/jamu.png";
import jufe from "../assets/photos/jufe.png";
import lela from "../assets/photos/lela.png";
import masi from "../assets/photos/masi.png";
import suli from "../assets/photos/suli.png";
import vaga from "../assets/photos/vaga.png";
import waji from "../assets/photos/waji.png";
import kram from "../assets/photos/kram.png";
import ceme from "../assets/photos/ceme.png";
import elri from "../assets/photos/elri.png";
import boxi from "../assets/photos/boxi.png";
import miwe from "../assets/photos/miwe.png";

import Gifts from "./Gifts";

export default function Tree({setIsOpen, setIdSkooler, setPhoto}) {
    let treeStyle = {
        display: 'block',
        margin: '0 auto',
        width:'auto',
        height:'100%',
        maxWidth:'100%'
    }



    return (
        <div id="xMasTree">
            <div style={{display:"none"}}>
                <img src={chaz}></img>
                <img src={bern}></img>
                <img src={boxi}></img>
                <img src={ceme}></img>
                <img src={elri}></img>
                <img src={jamu}></img>
                <img src={jufe}></img>
                <img src={lela}></img>
                <img src={masi}></img>
                <img src={suli}></img>
                <img src={vaga}></img>
                <img src={waji}></img>
                <img src={kram}></img>
                <img src={miwe}></img>
            </div>
            <Star clickMeBis={() => {setIsOpen(true);setIdSkooler("miwe");setPhoto(miwe)}} />
            <img src={christmas_tree_no_star} alt="christmas tree png" style={treeStyle}/>
            <Ball id="chaz" svg={ChazBall} onClick={() => {setIsOpen(true);setIdSkooler("chaz");setPhoto(chaz)}} photo={chaz}/>
            <Ball id="bern" svg={BernBall} onClick={() => {setIsOpen(true);setIdSkooler("bern");setPhoto(bern)}} photo={bern}/>
            <Ball id="boxi" svg={BoxiBall} onClick={() => {setIsOpen(true);setIdSkooler("boxi");setPhoto(boxi)}} photo={boxi}/>
            <Ball id="ceme" svg={CemeBall} onClick={() => {setIsOpen(true);setIdSkooler("ceme");setPhoto(ceme)}} photo={ceme}/>
            <Ball id="elri" svg={ElriBall} onClick={() => {setIsOpen(true);setIdSkooler("elri");setPhoto(elri)}} photo={elri}/>
            <Ball id="jamu" svg={JamuBall} onClick={() => {setIsOpen(true);setIdSkooler("jamu");setPhoto(jamu)}} photo={jamu}/>
            <Ball id="jufe" svg={JufeBall} onClick={() => {setIsOpen(true);setIdSkooler("jufe");setPhoto(jufe)}} photo={jufe}/>
            <Ball id="lela" svg={LelaBall} onClick={() => {setIsOpen(true);setIdSkooler("lela");setPhoto(lela)}} photo={lela}/>
            <Ball id="masi" svg={MasiBall} onClick={() => {setIsOpen(true);setIdSkooler("masi");setPhoto(masi)}} photo={masi}/>
            <Ball id="suli" svg={SuliBall} onClick={() => {setIsOpen(true);setIdSkooler("suli");setPhoto(suli)}} photo={suli}/>
            <Ball id="vaga" svg={VagaBall} onClick={() => {setIsOpen(true);setIdSkooler("vaga");setPhoto(vaga)}} photo={vaga}/>
            <Ball id="waji" svg={WajiBall} onClick={() => {setIsOpen(true);setIdSkooler("waji");setPhoto(waji)}} photo={waji}/>
            <Ball id="kram" svg={KramBall} onClick={() => {setIsOpen(true);setIdSkooler("kram");setPhoto(kram)}} photo={kram}/>
            <Gifts style={treeStyle}/>

        </div>
    );
}


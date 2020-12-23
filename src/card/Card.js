import React from "react";
import Tree from "./Tree";
import Ball from "./Ball";
import FloBall from "./../assets/balls/FloBall.svg";


function Card() {

    let audio = new Audio("/christmas.mp3")

    const startMusic = () => {
        audio.play()
    }

    const stopMusic = () => {
        audio.pause()
      }

    function open_card() {
        const card = document.getElementById("card");
        let timer = null;
        card.setAttribute('class', 'open-half');
        if (timer) clearTimeout(timer);
        timer = setTimeout(function () {
            card.setAttribute('class', 'open-fully');
            timer = null;
        }, 1000);
        startMusic()
    }

    function close_card() {
        const card = document.getElementById("card");
        card.setAttribute('class', 'open-half');
        setTimeout(function () {
            card.setAttribute('class', '');
        }, 1000);
        stopMusic()
    }


    return (
        <div id="card">
            <div id="card-inside">
                <div className="wrap">
                    <Tree/>
                    <Ball id={"flo"} svg={FloBall}/>
                </div>
            </div>

            <div id="card-front">
                <div className="wrap">
                    <h1>Joyeux Noel</h1>
                </div>
                <button onClick={open_card} id="open">&gt;</button>
                <button onClick={close_card} id="close">&lt;</button>
            </div>
        </div>
    );
}

export default Card;

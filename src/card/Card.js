import React, {useState} from "react";
import Tree from "./Tree";
import Ball from "./Ball";
import FloBall from "./../assets/balls/FloBall.svg";
import christmas_tree from "../assets/christmas.mp3"
import Modal from "react-awesome-modal";


function Card() {

    let audio = new Audio("/christmas.mp3")

    const startMusic = () => {
        audio.play()
    }

    const stopMusic = () => {
        audio.pause()
      }
    const [isOpen, setIsOpen] = useState(false);
    const [idSkooler, setIdSkooler] = useState("");

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


    return (<>
            <Modal visible={isOpen} width="400" height="300" effect="fadeInUp"
                   onClickAway={() => setIsOpen(false)}>
                <div>
                    <h1>Title</h1>
                    <p>Some Contents</p>
                    <a href="javascript:void(0);" onClick={() => setIsOpen(false)}>Close</a>
                </div>
            </Modal>
        <div id="card">
            <div id="card-inside">
                <div className="wrap">
                    <Ball id={"flo"} svg={FloBall} onClick={() => {
                        setIsOpen(true);
                        console.log("clicked");
                    }}/>
                    <Tree/>
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
        </>
    );
}

export default Card;

import React, {useState} from "react";
import Tree from "./Tree";
import FloBall from "../assets/balls/ChazBall.svg";
import Modal from "react-awesome-modal";
import Presentation from "./Presentation";
import border from "../assets/xmas-border.png";
import closeIcon from "./../assets/closeIcon.png";
import logo from "./../assets/octo_logo.png"


function Card() {

    let audio = new Audio("/christmas.mp3")

    const startMusic = () => {
        audio.play()
    }

    const stopMusic = () => {
        audio.pause()
      }
    const [isOpen, setIsOpen] = useState(false);
    const [idSkooler, setIdSkooler] = useState("bern");
    const [photo, setPhoto] = useState(logo);

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

    const closeButtonStyle = {
        position: 'absolute',
        marginTop: '-12px',
        left: '46.5%'
    }

    return (<>
            <Modal visible={isOpen} width="650" height="500" effect="fadeInUp"
                   onClickAway={() => setIsOpen(false)}>
                <div id="popin">
                    <img id="border" style={{maxWidth:'100%',maxHeight:'100%'}} src={border}/>
                    <Presentation quadri={idSkooler} photo={photo}/>
                </div>
                <img style={closeButtonStyle} src={closeIcon} alt={"close button"} onClick={()=>setIsOpen(false)}/>
            </Modal>
        <div id="card">
            <div id="card-inside">
                <div className="wrap">
                    <Tree setIsOpen={setIsOpen} setIdSkooler={setIdSkooler} setPhoto={setPhoto}/>
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

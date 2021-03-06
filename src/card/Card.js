import React, { useState } from "react";
import Tree from "./Tree";
import FloBall from "../assets/balls/ChazBall.svg";
import Modal from "react-awesome-modal";
import Presentation from "./Presentation";
import border from "../assets/xmas-border.png";
import closeIcon from "./../assets/closeIcon.png";
import logo from "./../assets/octo_logo.png"
import HomePage from "./HomePage";
import LeftPage from "./LeftPage";
import guirlandes1 from './../assets/guirlandesLumi1.png';
import guirlandes2 from './../assets/guirlandesLumi2.png';
import Background from "../assets/xmas-border.png";


function Card() {

    let audio = new Audio("/christmas.mp3")

    const startMusic = () => {
        audio.play()
    }

    const stopMusic = () => {
        audio.pause()
    }
    const [isOpen, setIsOpen] = useState(false);
    const [isCardOpened, setIsCardOpened] = useState(false);
    const [idSkooler, setIdSkooler] = useState("bern");
    const [photo, setPhoto] = useState(logo);

    function open_card() {
        const card = document.getElementById("card");
        let timer = null;
        card.setAttribute('class', 'open-half');
        if (timer) clearTimeout(timer);
        timer = setTimeout(function () {
            card.setAttribute('class', 'open-fully');
            setIsCardOpened(true)
            timer = null;
        }, 1000);
        startMusic()
    }

    function close_card() {
        const card = document.getElementById("card");
        card.setAttribute('class', 'open-half');
        setTimeout(function () {
            card.setAttribute('class', '');
            setIsCardOpened(false)
        }, 1000);
        stopMusic()
    }

    const popinStyle = {
        backgroundImage: `url(${Background})`,
        backgroundSize: '100% 100%',
        width: '100%',
        height: '100%',
        margin: 0,
        display: 'content',
        padding: '7% 6%'
    }

    const closeButtonStyle = {
        position: 'absolute',
        marginTop: '-12px',
        left: '46.5%',
        cursor: 'pointer',
        ':hover': 'box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);'
    }

    return (<>
        <Modal visible={isOpen} width="650" height="500" effect="fadeInUp"
            onClickAway={() => setIsOpen(false)}>
            <div id="popin" style={popinStyle}>
                <Presentation quadri={idSkooler} photo={photo} />
                <img id="closeButton" src={closeIcon} alt={"close button"}
                     onClick={() => setIsOpen(false)}
                />
            </div>

        </Modal>
        <div id="card">
            <div id="card-inside">
                <div className="wrap">
                    <img id="guirlandes1" src={guirlandes1}/>
                    <img id="guirlandes2" src={guirlandes2}/>
                    <Tree setIsOpen={setIsOpen} setIdSkooler={setIdSkooler} setPhoto={setPhoto} />
                </div>
            </div>

            <div id="card-front" className="folded_corner">
                <div className="wrap ">
                    {!isCardOpened && <HomePage></HomePage>}
                </div>
                <div className="left-page-content">
                    {isCardOpened && <LeftPage></LeftPage>}

                </div>
                <button onClick={open_card} id="open"></button>
                <button onClick={close_card} id="close"></button>

            </div>
        </div>
    </>
    );
}

export default Card;

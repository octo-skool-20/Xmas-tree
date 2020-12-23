import React, {useState} from "react";
import Modal from 'react-awesome-modal';
import ball from "../assets/balls/FloBall.svg";

export default function Ball({id, svg}) {
    const altMsg = id + " ball";
    const [isOpen, setIsOpen] = useState(false);

    function onModalOpen() {
        console.log(isOpen);
        setIsOpen(true);
        console.log(isOpen);
        console.log("clicked !");
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
            <div id={id} onClick={() => setIsOpen(true)}>
                <img src={svg} alt={altMsg}/>
            </div>
        </>
    );
}

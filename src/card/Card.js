import React, { useState } from "react";



function Card() {
    const [cardState, setCardState] = useState("");


    function open_card() {
        const card = document.getElementById("card");
        let timer = null;
        card.setAttribute('class', 'open-half');
        if (timer) clearTimeout(timer);
        timer = setTimeout(function () {
            card.setAttribute('class', 'open-fully');
            timer = null;
        }, 1000);
    }

    function close_card() {
        const card = document.getElementById("card");
        let timer = null;
        card.setAttribute('class', 'open-half');
        timer = setTimeout(function () {
            card.setAttribute('class', '');
            timer = null;
        }, 1000);
    }


    return (
        <div id="card">
            <div id="card-inside">
                <div class="wrap">
                    <p>Hey son,</p>
                    <p>I lost the message inside the card 2 times.. and i realsied i am slow at this :'( </p>
                    <p>Listen kid, I want you to be the happiest today.. and i suck at making people happy..This is probably the only gift i can give you, my word..</p>
                    <p>I will be there with you in your heart and soul whenever you seek me.
                    I love you.
        </p>
                    <p>always.</p>
                    <p><a href="http://pandey47.0fees.us/index4.html">NEXT</a></p>
                    <p class="signed">ZEF</p>

                </div>
            </div>

            <div id="card-front">
                <div class="wrap">
                    <h1>Joyeux Noel</h1>
                </div>
                <button onClick={open_card} id="open">&gt;</button>
                <button onClick={close_card} id="close">&lt;</button>
            </div>
        </div>
    );
}

export default Card;

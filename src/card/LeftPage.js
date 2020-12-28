import React from "react";
import Background from '../assets/leftpage-background.png';


export default function LeftPage() {



    return (
        <div style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: 'cover',
            width: '100%',
            height: '100%',
            margin:0

        }}>
            <div>
                <span>
                    Bli bla blou bla
                </span>
            </div>
        </div>
    );
}

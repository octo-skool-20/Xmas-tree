import React from "react";
import Background from '../assets/leftpage-background.png';


export default function LeftPage() {



    return (
        <div style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: 'cover',
            width: '100%',
            height: '100%',
            margin: 0

        }}>
            <div  >
                <div className="card-inside">
                    <div className="title">Conte de Noël</div>
                    <p>Nous allons vous conter la véritable histoire des 13 lutins de la skool 20. <br/>
                    Tous naquirent le 16 novembre 2020, confinés dans leur petite maison. <br/>
                    Heureusement, Mickael, leur étoile, leur a montré le chemin. <br/>
                    Tout au long de leur route, ils rencontrèrent différents anges, les formant sur les fondamentaux de la vie (l’agilité, le TDD, l’UX ...), et pour cela ils les remercient. <br/>
                    Pour découvrir les 13 lutins, passez votre souris sur leur boule, et cliquez dessus ! <br/>
                    </p>
                    <p>Happy hanukkah matata!</p>
                    <hr className="solid-black"/>
                    
                    <p>BERN, MASI, LELA, CEME, WAJI, MIWE, JUFE, BOXI, JAMU, ELRI, VAGA, <strong>SULI</strong>, KRAM, CHAZ</p>
                </div>
            </div>
        </div>
    );
}

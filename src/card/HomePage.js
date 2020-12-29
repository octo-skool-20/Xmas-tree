import React from "react";

export default function HomePage() {
    return (
        <div className="cardContent">
            <h1>Joyeux Noël</h1>
            <span style={{paddingTop:'3%', marginBottom:0, marginTop:"10%"}}>
                <hr className="solid" style={{marginTop:'15%'}}/>
                En ces temps de <span className="strong-word">fêtes</span>, la SKOOL 20 a une mission en <span className="strong-word">tête. </span>
                Vous souhaiter un <span className="strong-word">joyeux Noël</span> et une <span className="strong-word"> année exceptionnelle ! </span>
                Pleins de <span className="strong-word">couleurs</span> pour garder la bonne <span className="strong-word">humeur</span>,
                D’une <span className="strong-word">teinte</span> à une autre, venez voir les <span className="strong-word">skoolers</span>, dans toute leur <span className="strong-word">splendeur ! </span>
                Il ne faut que cela <span className="strong-word">tarde</span>, ouvrez vite la <span className="strong-word">carte !</span>
            </span>
            <hr className="solid"/>
            <p style={{textAlign:'end'}}><span className="strong-word">SKOOL 20 ✨</span></p>
        </div>
    );

    /*
    * alternative (mais cela impose de fixer la taille de la largeur de la carte) :
    *         <div className="cardContent">
            <h1>Joyeux Noël</h1>
            <p style={{paddingTop:'5%', marginBottom:0}}>
                En ces temps de <span className="strong-word">fêtes</span>, la SKOOL 20 a une mission en <span className="strong-word">tête.</span>
                <hr className="normal"/>
                Vous souhaiter un <span className="strong-word">joyeux Noël</span> et une <span className="strong-word"> année <hr className="normal"/>
                exceptionnelle ! </span>
                Pleins de <span className="strong-word">couleurs</span> pour garder la <hr className="normal"/> bonne <span className="strong-word">humeur</span>,
                D’une <span className="strong-word">teinte</span> à une autre, venez voir les <hr className="normal"/> <span className="strong-word">skoolers</span>, dans toute leur <span className="strong-word">splendeur ! </span>
                Il ne faut que <hr className="normal"/>cela <span className="strong-word">tarde</span>, ouvrez vite la <span className="strong-word">carte</span>
            </p>
            <hr className="solid"/>
            <p style={{textAlign:'end'}}><span className="strong-word">SKOOL 20 ✨</span></p>
        </div>
    * */
}

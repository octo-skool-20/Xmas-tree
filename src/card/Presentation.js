import React from "react";
import skool from "./../assets/skool.json";
import Background from "./../assets/xmas-border.png";

export default function Presentation({quadri, photo}) {

    const skoolers = skool.skoolers
    const mentor = skool.mentor

    const jsonData = skoolers[quadri] ? skoolers[quadri] : mentor.miwe

    const styleSheet = {

    }

    const fieldStyle = {
        fontVariantCaps: 'petite-caps',
        fontWeight: 700
    }

    const compField = "Compétences(s) : "
    const langField = "Langages(s) préféré(s) : "
    const passionField = "Passion(s) : "
    const minibioField = "À propos : "

    const compValue = jsonData.competence1.concat(jsonData.competence2 ? ", " + jsonData.competence2 : "")
    const langValue = jsonData.langProg1.concat(jsonData.langProg2 ? ", " + jsonData.langProg2 : "")
    const passionValue = jsonData.passion1.concat(jsonData.passion2 ? ", " + jsonData.passion2 : "")
    const minibioValue = jsonData.minibio ? jsonData.minibio : ""

    function PComponent({fieldName, fieldValue, style}) {
        return (
            <p className="prez" style={style?style:{}}>
                <span className="field">
                    {fieldName}
                </span>
                <span className="value">
                {fieldValue}
                </span>
            </p>
            )

    }

    return (
        <div style={styleSheet}>
            <img id="prezPhoto" src={photo} alt={"skooler's photo"}/>
            <h2><span>{quadri}</span> <br/> {jsonData.prenom} {jsonData.nom.length>8 && <br/>} {jsonData.nom} </h2>
            <PComponent fieldName={compField} fieldValue={compValue}/>
            <PComponent fieldName={langField} fieldValue={langValue}/>
            <PComponent fieldName={passionField} fieldValue={passionValue} style={{maxWidth: '88%'}}/>
            {jsonData.minibio
            && <PComponent fieldName={minibioField} fieldValue={minibioValue} style={{maxWidth: '85%'}}/>}
        </div>
    )
}

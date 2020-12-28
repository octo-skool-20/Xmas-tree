import React from "react";
import skool from "./../assets/skool.json"

export default function Presentation({quadri, photo}) {

    const skoolers = skool.skoolers
    const mentor = skool.mentor

    const jsonData = skoolers[quadri]

    const styleSheet = {
        position:'absolute',
        width:'80%',
        height: '80%',
        fontFamily: 'monospace arial',

        borderColor: jsonData.color,

        fontVariantCaps: 'petite-caps',
        fontSize:'27px',
        lineHeight:1,
        top:'50px',
        left:'50px'
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

    const photoPath = "/assets/photos/"+ quadri +".png"

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
    console.log(photoPath)

    return (
        <div style={styleSheet}>
            <img id="prezPhoto" src={photo} alt={"skooler's photo"}/>
            <h2><span>{quadri}</span> <br/> {jsonData.prenom} {jsonData.nom.length>8 && <br/>} {jsonData.nom} </h2>
            <PComponent fieldName={compField} fieldValue={compValue}/>
            <PComponent fieldName={langField} fieldValue={langValue}/>
            <PComponent fieldName={passionField} fieldValue={passionValue}/>
            {jsonData.minibio
            && <PComponent fieldName={minibioField} fieldValue={minibioValue} style={{maxWidth: '90%'}}/>}
        </div>
    )
}

import React from "react";
import skool from "./../assets/skool.json"

export default function Presentation({quadri}) {

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
    const minibioField = "À mon propos : "

    const compValue = jsonData.competence1.concat(jsonData.competence2 ? " & " + jsonData.competence2 : "")
    const langValue = jsonData.langProg1.concat(jsonData.langProg2 ? " & " + jsonData.langProg2 : "")
    const passionValue = jsonData.passion1.concat(jsonData.passion2 ? " & " + jsonData.passion2 : "")
    const minibioValue = jsonData.minibio

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
            <h2>{jsonData.prenom + " " + jsonData.nom} <span>{quadri}</span></h2>
            <PComponent fieldName={compField} fieldValue={compValue}/>
            <PComponent fieldName={langField} fieldValue={langValue}/>
            <PComponent fieldName={passionField} fieldValue={passionValue}/>
            <PComponent fieldName={minibioField} fieldValue={minibioValue} style={{maxWidth:'90%'}}/>
        </div>
    )
}

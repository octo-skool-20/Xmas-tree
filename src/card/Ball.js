import React from "react";
import ball from "../assets/balls/FloBall.svg";

export default function Ball({id, svg}) {

        // let circleStyle = {
        //     display:"inline-block",
        //     position:'absolute',
        //     backgroundColor: bgColor,
        //     borderRadius: "50%",
        //     width:50,
        //     height:50,
        //     left:'0%',
        //     top:'0%'
        // };
        const altMsg = id + " ball";

        return (
            <div id={id}>
                <img src={svg} alt={altMsg} />
            </div>
        );
}
// var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363",
//     "#85FFC7", "#297373", "#FF8552", "#A40E4C"];
//
// var renderData = [];
//
// for (var i = 0; i < colors.length; i++) {
//     var color = colors[i];
//     renderData.push(<Circle key={i + color} bgColor={color}/>);
// }
// var destination = document.querySelector("#container");
//
// ReactDOM.render(
//     <div>
//         {renderData}
//     </div>,
//     destination
// );

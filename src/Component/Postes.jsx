import React from "react";
import "./poste.css" 
function Postes({title,explain,image}) {

   

    return(
        <div className="div_">

            <h3>{title}</h3>
            <p>{explain}</p>
            <img src={image}></img>
        </div>
    );
}

export default Postes;
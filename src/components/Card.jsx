import React from "react";
import { useState } from "react";
import { cardData } from "../assets/data/cardData";
import '../css/Card.css';

export const Card = () => {
    // const [cardData, setCardData] = useState();
    
    return(
        <div id="CmpProyects" className="container">
            <h1 className="containerT">Proyectos</h1>
            <div className="cardsCnt"> 
            
            {cardData.map((element, index) => (
                    <div className="cardCnt" key={index}>
                        <div className="imgCnt">
                            <img src={element.img} alt="" />
                        </div>
                        <div className="infCnt">
                            <h1>{element.title}</h1>
                            <p>{element.description}</p>
                            <button>Ver mas...</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
import React from "react";
import { useState } from "react";
import { cardData } from "../assets/data/cardData";

export const Card = () => {
    // const [cardData, setCardData] = useState();
    
    return(
        <div className="container">
            <h1>Proyectos</h1>
            <div className="cardsCnt">
            
            {cardData.map((element, index) => (
                    <div className="cardCnt" key={index}>
                        <div className="imgCnt">
                            <img src={element.img} alt="" />
                        </div>
                        <div className="infCnt">
                            <h2>{element.title}</h2>
                            <p>{element.description}</p>
                            <button>Ver mas...</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
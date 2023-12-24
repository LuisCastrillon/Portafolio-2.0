import React from "react";
import '../css/portada.css';
import facebook from  '../assets/icon/facebook.png';
import linkin from  '../assets/icon/linkin.png';
import email from  '../assets/icon/email.png';
import whatsapp from  '../assets/icon/whatsapp.png';

export const Portada = (props) => {

    return(
        <section className="seccionPortada">
            <header className="header">
                <div className="cntLinksHeader">
                    <a href="#">Sobre mi</a>
                    <a href="#">Proyectos</a>
                    
                </div>
            </header>
            <div className="cntPortada">
                <h1>{props.titulo}</h1>
                <h2>{props.rol } <span className="red">{props.elemento}</span></h2>
                <p>{props.descripcion}</p>
                <div className="cntLinks">
                    <div>
                        <a href="#" id="cvLink">Descargar CV</a>
                    </div>
                    <div>
                        <a href="#"><img src={linkin} alt="" /></a>
                        <a href="#"><img src={whatsapp} alt="" /></a>
                        <a href="#"><img src={email} alt="" /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
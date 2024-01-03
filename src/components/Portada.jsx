import React from "react";
import '../css/portada.css';
import facebook from  '../assets/icon/facebook.png';
import linkin from  '../assets/icon/linkin.png';
import email from  '../assets/icon/email.png';
import whatsapp from  '../assets/icon/whatsapp.png';
import luis from '../assets/img/yo.jpg';

export const Portada = (props) => {
    const open = (prop) => {
        switch(prop){
        case "cv":  window.open('/src/assets/pdf/LuisCastrillon.pdf', '_blank'); 
        case "wpp":  window.open('https://wa.me/3052169307', '_blank'); 
        case "in":  window.open('https://www.linkedin.com/in/luis-castrillon-60065423a', '_blank'); 
        case "email":  window.open('mailto:tutukastrillon@gmail.com', '_blank'); 

        }
    }

    return(
        <section className="seccionPortada">
            <header className="header">
                <a href=""><h2>LUIS CASTRILLON</h2></a>
                <div className="cntLinksHeader">
                    <a href="#CmpProyects">Proyectos</a>
                    <a href="#CmpSkills">Habilidades</a> 
                    <a href="#CmpAboutMe">Sobre mi</a> 
                    <a href="#CmpCerti">Certificaciones</a> 
                    
                </div>
            </header>
            <div className="cntPortada">
                <h1>{props.titulo}</h1>
                <h2>{props.rol}</h2>
                <p>{props.descripcion}</p>
                <div className="cntLinks">
                    <div>
                        <a onClick={() => {
                            open("cv")
                        }} href="#" id="cvLink">Descargar CV</a>
                    </div>
                    <div>
                        <a onClick={() => {
                            open("in")
                        }} href="#"><img src={linkin} alt="" /></a>
                        <a onClick={() => {
                            open("wpp")
                        }} href="#"><img src={whatsapp} alt="" /></a>
                        <a onClick={() => {
                            open("email")
                        }} href="#"><img src={email} alt="" /></a>
                    </div>
                </div>
            </div>
            <div className="pictureCnt">
                <img src={luis ? luis : <p>... </p>} alt="" />
            </div>
        </section>
    )
}
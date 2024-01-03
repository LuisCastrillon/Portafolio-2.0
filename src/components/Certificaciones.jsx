import '../css/certificaciones.css'
import { certificacionesData } from '../assets/data/cardData'
import { useState } from 'react'


export const Certificaciones = () => {
    // const [cert, setCert] = useState()
    const certificado = (prop) => {
        switch(prop){
            case 1: window.open('./pdf/Constancia.pdf', '_blank')
            // case 2: window.open('Constancia.pdf', '_blank');
            // case 3: window.open('Constancia.pdf', '_blank');
            // case 4: window.open('Constancia.pdf', '_blank');
            // case 5: window.open('Constancia.pdf', '_blank');
            // case 6: window.open('Constancia.pdf', '_blank');

        }
    }
    return (
        <div className='certiCnt'>
            <h1 className='certiTitle'>Certificaciones</h1>
            <div className='gridCnt'>
                {certificacionesData.map((element, index) => (
                    <div onClick={() => {certificado(index)}} className={"d" + index} key={index}>
                        <img src={element} alt="" />
                    </div>
                ))}
            </div>
        </div>
    )
}
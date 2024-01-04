import '../css/certificaciones.css'
import { certificacionesData } from '../assets/data/cardData'


export const Certificaciones = () => {
    const certificado = (prop) => {
        switch(prop){
            case 6: window.open('/assets/platzi.jpg', '_blank');
            case 4: window.open('/assets/ingles3.jpg', '_blank')
            case 3: window.open('/assets/ingles2.jpg', '_blank');
            case 2: window.open('/assets/ingles1.jpg', '_blank');
            case 1: window.open('/assets/ingles.jpg', '_blank');
            case 5: window.open('/assets/ingles4.jpg', '_blank');
            case 8: window.open('/assets/tic.jpg', '_blank');
            case 0: window.open('/assets/c.jpg', '_blank');
            case 7: window.open('/assets/google.jpg', '_blank');


        }
    }
    return (
        <div id="CmpCerti" className='certiCnt'>
            <h1 className='certiTitle'>Certificaciones</h1>
            <div className='gridCnt'>
                {certificacionesData.map((element, index) => (
                    <div className={"d" + index} key={index}>
                        <img src={element} alt="" />
                    </div>
                ))}
            </div>
        </div>
    )
}
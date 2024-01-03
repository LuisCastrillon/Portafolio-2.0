import '../css/certificaciones.css'
import { certificacionesData } from '../assets/data/cardData'


export const Certificaciones = () => {
    const certificado = (prop) => {
        switch(prop){
            case 6: window.open('/src/assets/img/platzi.jpg', '_blank');
            case 4: window.open('/src/assets/img/ingles3.jpg', '_blank')
            case 3: window.open('/src/assets/img/ingles2.jpg', '_blank');
            case 2: window.open('/src/assets/img/ingles1.jpg', '_blank');
            case 1: window.open('/src/assets/img/ingles.jpg', '_blank');
            case 5: window.open('/src/assets/img/ingles4.jpg', '_blank');
            case 8: window.open('/src/assets/img/tic.jpg', '_blank');
            case 0: window.open('/src/assets/img/c.jpg', '_blank');
            case 7: window.open('/src/assets/img/google.jpg', '_blank');


        }
    }
    return (
        <div id="CmpCerti" className='certiCnt'>
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
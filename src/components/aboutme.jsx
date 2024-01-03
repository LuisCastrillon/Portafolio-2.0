import '../css/aboutme.css';
import yo from '../assets/img/yo1.jpg';

export const AboutMe = () => {
    return (
        <div id='CmpAboutMe' className='aboutMeCnt'>
            <h1 className='aboutMeCntM'>
                Un poco sobre mi
            </h1>
            <div className='AMinfCnt'>
                <div className='conocemeCnt'>
                    <div className='AMImgCnt'>
                        <img src={yo} alt="" />
                    </div>
                    <div className='conoceme'>
                        <h1>Conóceme</h1>
                        
                        <p>
                            Soy un joven de 19 años que se siente atraído por el mundo de la creatividad y la tecnología. Desde mi adolescencia, he estado explorando diversas formas de expresión, lo que me ha llevado a descubrir mi pasión por el diseño y la programación.
                        </p>
                    </div>
                </div>
                <div className='infCntC'>
                    <p>
                        Mi interés por la programación surgió justo después de graduarme como bachiller. Al adentrarme en este campo, me di cuenta de que podía combinar mis habilidades creativas con la lógica y la resolución de problemas. A lo largo de mi camino de autodescubrimiento, he tenido la oportunidad de aprender de forma autodidacta y he adquirido un amplio conjunto de conocimientos técnicos en diferentes tecnologías.<br /><br />
                        Actualmente, me encuentro estudiando una tecnología relacionada con el análisis y desarrollo de software. Mi enfoque principal se centra en el desarrollo frontend, donde puedo dar vida a diseños atractivos y funcionales. Sin embargo, no me limito únicamente al desarrollo front-end, ya que también me encuentro adquiriendo varios conocimientos sobre el desarrollo back-end.<br /><br />
                        Mi enfoque autodidacta me ha permitido adquirir diferentes habilidades, desde la conceptualización de diseños hasta la implementación de soluciones técnicas sólidas.<br /><br />
                        En resumen, soy un joven apasionado y creativo que está decidido a desarrollar su carrera en el mundo de la tecnología y el diseño. Estoy emocionado por seguir explorando nuevas oportunidades y desafíos en este apasionante viaje de autodescubrimiento y crecimiento profesional.
                    </p>
                </div>
            </div>
        </div>
    )
}
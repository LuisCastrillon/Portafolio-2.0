import '../css/Footer.css'

export const Footer = () => {
    const openEmail = () => {
        window.open('mailto:tutukastrillon@gmail.com', '_blank'); 
    }

    return(
        <div className='FooterCnt'>
            <div className='linksCnt'>
                <a href="#CmpProyects">Proyectos</a>
                <a href="#CmpSkills">Habilidades</a> 
                <a href="#CmpAboutMe">Sobre mi</a> 
                <a href="#CmpCerti">Certificaciones</a>
            </div>
            <button onClick={() => {
                openEmail()
            }} className='ContactMeButton'>
                Contactame
            </button>
        </div>
    )
}
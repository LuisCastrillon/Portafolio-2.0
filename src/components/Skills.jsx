import { skillsData } from "../assets/data/cardData"
import '../css/Skills.css';

export const Skills = () => {
    return(
        <div id="CmpSkills" className="skillsCmpCnt">
            <h1>Tecnologias</h1>
            <div className="skillsCnt">
            {skillsData.map((element, index) => (
                <div className="skillCnt" key={index}>
                    <img src={element} alt={index} />
                </div>
            )) }
            </div>
        </div>
    )
}
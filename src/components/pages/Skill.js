import { useLocation } from 'react-router-dom'

import PageOpener from '../sections/PageOpener'
import SkillCard from '../cards/SkillCard'
import ProjectsButton from '../elements/ProjectsButton'
import skills from '../../database/skills'
import projects from '../../database/projects'
import DescriptionLinkCard from '../cards/DescriptionLinkCard'

import '../../style/skills.css'

function Skill() {
    const location = useLocation()
    const specificSkill = location.state.skill
    const skillsArray = Object.keys(skills)

    const projectList = skills[specificSkill].map((project, index) => {
        return (
            <div 
                key={index}
                className="adjusting-contained"
            >
                <DescriptionLinkCard 
                    name={projects[project].name}
                    description={projects[project].skills[specificSkill]}
                />
            </div>
        )
    })

    return (
        <div>
            <PageOpener 
                title={specificSkill}
                description="Discover how I implemented this skill in different ways on various projects"
            />
            
            <div class="overcoming-header">
                <main>
                    <div className="adjusting-display-area">
                        {projectList}
                    </div>

                    <div className="blank-space" />

                    <SkillCard 
                        description="All My Skills"
                        category={skillsArray}
                    />

                    <div className="blank-space" />
                    
                    <ProjectsButton />
                </main>
            </div>

            <hr />
        </div>
    )
}

export default Skill
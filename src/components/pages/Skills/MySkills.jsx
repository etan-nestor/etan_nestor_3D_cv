import React from 'react'
import SkillsLevel from './SkillsLevel'

const MySkills = () => {
    return (
        <div className='h-full page-shadown bg-white px-10'>
            <div>
                {/* Headings */}
                <div>
                    <div className="relative">
                        <div className="text-center uppercase text-6xl xl:text-8xl font-bold text-black/5">
                            SKILLS
                        </div>
                        <h1 className='font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl'>Skills</h1>
                    </div>
                </div>
                {/* Skills sections */}
                <div>
                    <SkillsLevel skillName="HTML-CSS-JAVASCIPT" percentage={"90%"} />
                    <SkillsLevel skillName="MERN" percentage={"85%"} />
                    <SkillsLevel skillName="MEAN" percentage={"82%"} />
                    <SkillsLevel skillName="PYTHON" percentage={"80%"} />
                    <SkillsLevel skillName=".Net MAUI - React Native" percentage={"77%"} />
                    <SkillsLevel skillName="PHP" percentage={"70%"} />
                    <SkillsLevel skillName="JAVA Fx" percentage={"65%"} />
                    <SkillsLevel skillName="C#-VBA" percentage={"55%"} />
                </div>
            </div>
        </div>
    )
}

export default MySkills
import { FC } from 'react'
import { AboutMeSkillProps } from '../../types/AboutMeSkill'

const AboutMeSkill: FC<AboutMeSkillProps> = ({skills}) => {
    return (
    <div className=''>
        <div className=" py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
{/*         <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Skills</h2> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300"
            >
              <skill.icon className={`text-6xl mb-4 text-${skill.color}`} />
              <p className="text-lg font-medium text-gray-700">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutMeSkill
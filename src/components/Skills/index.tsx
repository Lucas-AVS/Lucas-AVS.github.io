import { SkillIcon, SkillsContainer, SkillsGrid } from './styles'
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiVite,
  SiGithub,
  SiStyledcomponents,
  SiTailwindcss,
  SiDeno,
  SiSupabase,
} from 'react-icons/si'

const skillsData = [
  { skill: 'React', icon: <SiReact /> },
  { skill: 'Next.js', icon: <SiNextdotjs /> },
  { skill: 'JavaScript', icon: <SiJavascript /> },
  { skill: 'TypeScript', icon: <SiTypescript /> },
  { skill: 'Vite', icon: <SiVite /> },
  { skill: 'GitHub', icon: <SiGithub /> },
  { skill: 'Styled Components', icon: <SiStyledcomponents /> },
  { skill: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { skill: 'Deno', icon: <SiDeno /> },
  { skill: 'Supabase', icon: <SiSupabase /> },
]

const Skills = () => {
  return (
    <SkillsContainer>
      <h2>I have experience with these technologies</h2>
      <SkillsGrid>
        {skillsData.map(({ skill, icon }, index) => (
          <SkillIcon key={index} data-skill={skill}>
            {icon}
          </SkillIcon>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  )
}

export default Skills

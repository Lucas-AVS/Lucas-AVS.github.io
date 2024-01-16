import {
  ProjectButton,
  ProjectButtonContainer,
  ProjectLink,
  ProjectsContainer,
  StyledPreview,
  StyledProject,
  StyledProjects,
} from './styles'
import BGIMAGE from '../../assets/bg-about-me.png'
import AVSLOGO from '../../assets/avs-icon.svg'
import dtmoneyPreview from '../../assets/dt-money-preview.gif'

const projectsData = [
  {
    image: dtmoneyPreview,
    link: 'http://lucasavs-dt-money.vercel.app/',
    name: 'DT Money',
  },
  { image: AVSLOGO, name: 'project 2' },
  { name: 'project 3' },
]

const Project = ({ link, name, image }) => {
  return (
    <StyledProject>
      <ProjectLink href={link ? link : '#'} target="_blank">
        <StyledPreview src={image ? image : null}></StyledPreview>
      </ProjectLink>
      <p>{name ? name : 'project'}</p>
    </StyledProject>
  )
}

export default function Projects() {
  return (
    <ProjectsContainer>
      <h2>Some of my recent projects</h2>
      <StyledProjects>
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </StyledProjects>
      <ProjectButtonContainer>
        <ProjectButton>My projects</ProjectButton>
      </ProjectButtonContainer>
    </ProjectsContainer>
  )
}

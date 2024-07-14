/* eslint-disable react/prop-types */

const ProjectCard = ({src, link, h3, p}) => {
  return (
    <a href={link} target="_blank">
            <img src={src} alt={`${h3} logo`} className="hover" target="_blank"/>
            <h3>{h3}</h3>
            <p>{p}</p>
    </a>
  )
}

export default ProjectCard

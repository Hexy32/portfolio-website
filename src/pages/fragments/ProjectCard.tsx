import { CardProps } from '../Projects'

function ProjectCard({
  title,
  date,
  details,
  image,
  projectLink,
  repositoryLink,
  tags,
}: CardProps) {
  return (
    <article>
      <div>
        <h4>{title}</h4>
        <p>{date}</p>
        <div>
          {tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <p>{details}</p>
        <a target="_blank" href={projectLink}>
          Check it out
        </a>
        <a target="_blank" href={repositoryLink}>
          See the code
        </a>
      </div>
      <img src={image} alt="" />
    </article>
  )
}

export default ProjectCard

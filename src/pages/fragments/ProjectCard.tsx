import { CardProps } from '../Projects'
import s from '../../sass/pages/projects.module.sass'

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
    <article className={s.card}>
      <img className={s.image} src={image} alt="" />
      <div>
        <h4 className={s.title}>{title}</h4>
        <p className={s.date}>{date}</p>
      </div>
      <div className={s.tags}>
        {tags.map(tag => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <p className={s.details}>{details}</p>
      <div className={s.buttons}>
        <button>
          <a target="_blank" href={projectLink}>
            Check it out
          </a>
        </button>
        <button>
          <a target="_blank" href={repositoryLink}>
            See the code
          </a>
        </button>
      </div>
    </article>
  )
}

export default ProjectCard

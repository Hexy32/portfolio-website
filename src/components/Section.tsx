import { ReactElement } from 'react'
import s from '../sass/components/section.module.sass'

function Section({ children, name }: SectionProps) {
  return (
    <section className={s.section + ' ' + (name ? s[name.toLowerCase()] : s.home)}>
      {name ? <h2 className={s.title}>{name}</h2> : null}
      {children}
    </section>
  )
}

export default Section

interface SectionProps {
  children: ReactElement
  name?: string
}

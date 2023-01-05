import s from '../sass/pages/home.module.sass'

function Home() {
  return (
    <div className={s.heroSection}>
      <h1 className={s.hero}>Font-End Web Developer</h1>
      <p className={s.subtitle}>React &#x2022; TypeScript &#x2022; Sass</p>
      <button className={s.scrollIndicator}>
        <span className=" material-symbols-rounded">south</span>
      </button>
    </div>
  )
}

export default Home
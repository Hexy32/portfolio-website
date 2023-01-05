import s from '../sass/components/header.module.sass'

function Header() {
  // const [isScrolled, setIsScrolled] = useState(false)

  const navItems: NavItem[] = [
    {
      text: 'Home',
      function: () => {
        console.log('clicked!')
      },
    },
    {
      text: 'Projects',
      function: () => {
        console.log('clicked!')
      },
    },
    {
      text: 'About',
      function: () => {
        console.log('clicked!')
      },
    },
    {
      text: 'Resume',
      function: () => {
        console.log('clicked!')
      },
    },
    {
      text: 'Contact',
      function: () => {
        console.log('clicked!')
      },
    },
  ]

  const createNav = (navItems: NavItem[]) => {
    return navItems.map(item => (
      <li key={item.text}>
        <button onClick={item.function}>{item.text}</button>
      </li>
    ))
  }

  return (
    <header className={s.header}>
      <div>
        <p className={s.subtitle}>Web developer & designer.</p>
        <h1 className={s.title}>Hello, I'm Drake.</h1>
      </div>
      <nav>
        <ul>{createNav(navItems)}</ul>
      </nav>
    </header>
  )
}

export default Header

interface NavItem {
  text: string
  function: () => void
}

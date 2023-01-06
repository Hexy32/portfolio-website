import { useEffect, useMemo, useState } from 'react'

import s from '../sass/components/header.module.sass'
import scrollTo from '../scripts/scrollTo'

function Header() {
  const [amountScrolled, setAmountScrolled] = useState(0)
  const [currentPage, setCurrentPage] = useState('Home')

  document.addEventListener('scroll', () => {
    setAmountScrolled(window.pageYOffset)
  })

  useEffect(() => {
    //Check what 'page' the user is scrolled to
    const headerOffset = document.querySelector('header')!.clientHeight + 5

    for (let i = navItems.length - 1; i >= 0; i--) {
      const item = navItems[i]
      const itemElement =
        item.text !== 'Home'
          ? document.querySelector<HTMLElement>('#' + item.text)!
          : document.querySelector<HTMLElement>('body')!

      // console.log(item.text, itemElement.offsetTop, amountScrolled)
      if (amountScrolled + headerOffset >= itemElement.offsetTop) {
        setCurrentPage(item.text)
        break
      }
    }
  }, [amountScrolled])

  const navItems: NavItem[] = [
    {
      text: 'Home',
      action() {
        scrollTo('Home')
      },
    },
    {
      text: 'Projects',
      action() {
        scrollTo('Projects')
      },
    },
    {
      text: 'About',
      action() {
        scrollTo('About')
      },
    },
    {
      text: 'Resume',
      action() {
        scrollTo('Resume')
      },
    },
    {
      text: 'Contact',
      action() {
        scrollTo('Contact')
      },
    },
  ]

  const createNav = (navItems: NavItem[]) => {
    return navItems.map(item => (
      <li key={item.text}>
        <button className={item.text === currentPage ? s['selected'] : ''} onClick={item.action}>
          {item.text}
        </button>
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
  action(): void
}

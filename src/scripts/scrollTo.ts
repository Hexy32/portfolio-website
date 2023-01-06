import SweetScroll from 'sweet-scroll'

export default function scrollTo(section: string) {
  let elem: HTMLElement

  if (section === 'Home') {
    elem = document.querySelector<HTMLElement>('body')!
  } else {
    elem = document.querySelector<HTMLElement>('#' + section)!
  }

  // const h1 = elem.firstChild as HTMLElement

  const header = document.querySelector<HTMLElement>('header')!

  const scroller = new SweetScroll({
    easing: 'easeInOutQuint',
    offset: (header.clientHeight - 1) * -1,
  })

  scroller.toElement(elem)
}

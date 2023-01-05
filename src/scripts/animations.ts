export {}

const r = document.querySelector<HTMLBaseElement>(':root')!

function updateBackground() {
  let position = 0

  setInterval(() => {
    position++

    r.style.setProperty('--background-position', position + 'px')
  }, 60)
}

function updateScroll() {
  const adjustedOffset = window.pageYOffset / 100
  const percentage = adjustedOffset <= 1 ? adjustedOffset : 1
  r.style.setProperty('--nav-bar-progress', percentage.toString())
}

updateBackground()
updateScroll()

window.addEventListener('scroll', updateScroll)

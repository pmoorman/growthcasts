import SmoothScroll from 'smooth-scroll'

export default class Scroll {
  init() {
    this.setEvents()
  }

  setEvents() {
    let scroll = new SmoothScroll('.nav__link', {
      speed: 3000,
      offset: -60,
      easing: 'easeInOutCubic',
      after: (anchor, toggle) => {
        document.querySelectorAll(".nav__link").forEach(link => link.classList.remove('nav__link--active'))
        toggle.classList.add('nav__link--active')
      }
    })

    let scrollDown = new SmoothScroll('.jsScrollDownBtn', {
      speed: 1000,
      offset: 0,
      easing: 'easeInOutCubic'
    })
  }
}

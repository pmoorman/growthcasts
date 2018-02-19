import SmoothScroll from 'smooth-scroll'

export default class Scroll {
  init() {
    this.setEvents()
  }

  setEvents() {
    const scroll = new SmoothScroll('.nav__link', {
      speed: 3000,
      offset: 0,
      easing: 'easeInOutCubic',
      after: (anchor, toggle) => {
        document.querySelectorAll(".nav__link").forEach(link => link.parentNode.classList.remove('nav__item--active'))
        toggle.parentNode.classList.add('nav__item--active')
      }
    })
  }
}

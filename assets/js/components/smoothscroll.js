import scrollIt from '../vendor/scroll-it'

export default class SmoothScroll {
  init() {
    if (!this.setVars()) return
    this.setEvents()
  }

  setVars() {
    this._links = document.querySelectorAll('a[href^="#"]')
    if (!this._links) return false

    return true
  }

  setEvents() {
    for (var i = 0; i < this._links.length; i++) {
      this._links[i].addEventListener('click', (event) => {
        scrollIt(document.querySelector(event.currentTarget.getAttribute('href')))
      })
    }
  }
}

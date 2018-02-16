import Swiper from 'swiper'

export default class Carousel {
  init() {
    if (!this.setVars()) return
    this.setEvents()
  }

  setVars() {
    this._swiper = document.querySelector('.swiper-container')
    if (!this._swiper) return false

    return true
  }

  setEvents() {
    const testimonialsSlider = new Swiper(this._swiper, {
      speed: 800,
      spaceBetween: 300,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
  }
}

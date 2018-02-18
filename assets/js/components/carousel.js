import Swiper from "swiper"

export default class Carousel {
  init() {
    if (!this.setVars()) return
    this.setEvents()
  }

  setVars() {
    this._swiper = document.querySelector(".swiper2")
    if (!this._swiper) return false

    return true
  }

  setEvents() {
    const swiper2 = new Swiper(this._swiper, {
      speed: 800,
      spaceBetween: 300,
      loop: true,
      pagination: {
        el: ".swiper-pagination2",
        clickable: true
      }
    })
  }
}
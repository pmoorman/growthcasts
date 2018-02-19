import Swiper from "swiper"

export default class Carousel {
  init() {
    if (!this.setVars()) return
    this.setEvents()
  }

  setVars() {
    this._swiper = document.querySelector(".jsSwiper1")
    if (!this._swiper) return false

    return true
  }

  setEvents() {
    const swiper = new Swiper(this._swiper, {
      speed: 800,
      spaceBetween: 0,
      loop: true,
      pagination: {
        el: ".jsSwiperPagination1",
        clickable: true,
        bulletClass: "slider-pagination__switch--active",
        bulletActiveClass: "slider-pagination__switch",
        renderBullet: function (index, className) {
          return `<div class="slider-pagination__switch ${className}">
                    <img class="slider-pagination__img image" src="./assets/images/logos/${index + 1}-g.png" alt="">
                  </div>`
        }
      }
    })
  }
}

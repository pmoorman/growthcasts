import Swiper from "swiper"

export default class Slider {
  init() {
    if (!this.setVars()) return
    this.setEvents()
  }

  setVars() {
    this._swiper = document.querySelector(".jsSwiper1")
    if (!this._swiper) return false

    return true
  }

  setCarousel() {
    this._swiperInstance = new Swiper(this._swiper, {
      speed: 800,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 20000,
      },
      pagination: {
        el: ".jsSwiperPagination1",
        clickable: true,
        slideClass: "swiper-slide",
        bulletClass: "slider__switch",
        bulletActiveClass: "slider__switch--active",
        renderBullet: function (index, className) {
          return `<div class="${className}">
                    <img class="image" src="./assets/images/logos/${index + 1}.png" alt="">
                  </div>`
        }
      }
    })
  }

  destroyCarousel() {
    this._swiperInstance.destroy()
    delete this._swiperInstance
  }

  setEvents() {
    if (window.innerWidth > 520) {
      this.setCarousel()
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 520 && typeof this._swiperInstance == "object") {
        console.log(this._swiperInstance.pagination)
        this.destroyCarousel()
      } else if (window.innerWidth > 520 && typeof this._swiperInstance != 'object') {
        this.setCarousel()
      }
    })
  }
}

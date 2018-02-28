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

  setEvents() {
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
        bulletClass: "slider__switch",
        bulletActiveClass: "slider__switch--active",
        renderBullet: function (index, className) {
          return `<div class="${className}">
                    <img class="image" src="./assets/images/logos/${index + 1}.png" alt="">
                  </div>`
        }
      },
      breakpoints: {
        520: {
          pagination: {
            renderBullet: function (index, className) {
              if (index < 3 ) {
                return `<div class="${className}">
                          <img class="image" src="./assets/images/logos/${index + 1}.png" alt="">
                        </div>`
              } else {
                return ""
              }
            }
          }
        }
      }
    })
  }

  limitSlider() {
    this._swiperInstance.removeSlide([3, 4, 5, 6])
    this._swiperInstance.update()
  }
}

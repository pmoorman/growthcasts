import Gumshoe from "gumshoejs"

export default class Slider {
  init() {
    if (!this.setVars()) return
    this.setEvents()
  }

  setVars() {
    this._nav = document.querySelector(".jsMenu")
    if (!this._nav) return false

    this._discount = document.querySelector(".jsDiscount")
    if (!this._discount) return false

    this._pricing1 = document.querySelector(".jsPricing1")
    this._pricing2 = document.querySelector(".jsPricing2")

    return true
  }

  setEvents() {
    Gumshoe.init({
      selector: ".jsMenu > ul > li > a",
      container: window,
      offset: 0,
      activeClass: "sales-nav__link--active",
    })

    if (window.innerWidth < 1200) {
      this._discount.classList.add("discount--mobile")

      window.addEventListener("scroll", () => {
        if (window.pageYOffset >= this._pricing1.offsetTop - 300 && window.pageYOffset < this._pricing1.offsetTop + this._pricing1.offsetHeight) {
          this._discount.classList.remove("discount--mobile")
        } else if (window.pageYOffset >= this._pricing2.offsetTop - 200 && window.pageYOffset < this._pricing2.offsetTop + this._pricing2.offsetHeight) {
          this._discount.classList.remove("discount--mobile")
        } else {
          this._discount.classList.add("discount--mobile")
        }
      })
    }
  }
}

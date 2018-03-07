import Gumshoe from "gumshoejs"

export default class Slider {
  init() {
    if (!this.setVars()) return
    this.setEvents()
  }

  setVars() {
    this._nav = document.querySelector(".jsMenu")
    if (!this._nav) return false

    this._pricing = document.querySelector(".jsPricing")
    this._discount = document.querySelector(".jsDiscount")
    if (!this._discount) return false

    return true
  }

  setEvents() {
    Gumshoe.init({
      selector: ".jsMenu > ul > li > a",
      container: window,
      offset: 0,
      activeClass: "sales-nav__link--active",
    })

    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= pricing.offsetTop && window.pageYOffset < pricing.offsetTop + pricing.offsetHeight) {
        this._discount.classList.add("discount--mobile")
      } else {
        this._discount.classList.remove("discount--mobile")
      }
    })
  }
}

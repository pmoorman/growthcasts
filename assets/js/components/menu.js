export default class MobileMenu {
  init() {
    if (!this.setVars()) return
    this.setEvents()
  }

  setVars() {
    this._menu = document.querySelector(".jsMenu")
    if (!this._menu) return false

    this._menuBtn = document.querySelector(".jsMenuBtn")
    this._offcanvas = document.querySelector(".jsOffcanvas")
    return true
  }

  setEvents() {
    this._menuBtn.addEventListener("click", () => {
      this._menuBtn.classList.toggle("menu-button--open")
      this._offcanvas.classList.toggle("offcanvas--active")

      if (this._offcanvas.classList.contains("offcanvas--active")) {

        window.addEventListener("scroll", () => {
          this._offcanvas.classList.remove("offcanvas--active")
          this._menuBtn.classList.remove("menu-button--open")
        })
        
      }
    })
  }
}

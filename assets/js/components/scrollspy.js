import Gumshoe from "gumshoejs"

export default class Slider {
  init() {
    if (!this.setVars()) return
    this.setEvents()
  }

  setVars() {
    this._nav = document.querySelector(".jsMenu")
    if (!this._nav) return false

    return true
  }

  setEvents() {
    Gumshoe.init({
    selector: ".jsMenu > ul > li > a",
    selectorHeader: "jsMenu",
    container: window,
    offset: 0,
    activeClass: "nav__link--active",
});
  }
}

import SmoothScroll from "smooth-scroll"

export default class Scroll {
  init() {
    this.setEvents()
  }

  setEvents() {
    let scroll = new SmoothScroll(".sales-nav__link", {
      speed: 3000,
      offset: -60,
      easing: "easeInOutCubic",
      after: (anchor, toggle) => {
        document.querySelectorAll(".sales-nav__link").forEach(link => link.classList.remove("sales-nav__link--active"))
        toggle.classList.add("sales-nav__link--active")
      }
    })

    let scrollDown = new SmoothScroll(".jsScrollDownBtn", {
      speed: 1000,
      offset: 0,
      easing: "easeInOutCubic"
    })
  }
}

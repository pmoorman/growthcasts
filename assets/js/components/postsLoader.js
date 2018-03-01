export default class PostsLoader {
  init() {
    if (!this.setVars()) return
    this.setEvents()
  }

  setVars() {
    this._postsBtn = document.querySelector(".jsLoadMoreBtn")
    if (!this._postsBtn) return false

    return true
  }

  setEvents() {
    this._postsBtn.addEventListener("click", function(e) {
      e.preventDefault()
    })
  }
}

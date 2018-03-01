export default class PostsLoader {
  init() {
    if (!this.setVars()) return
    this.setEvents()
  }

  setVars() {
    this._postsBtn = document.querySelector(".jsLoadMoreBtn")
    this._postsList = document.querySelector(".jsPostsList").children
    this._maxVisiblePosts = 3
    this._postsNumber = this._postsList.length
    if (!this._postsBtn) return false

    return true
  }

  setEvents() {
    for (let i = this._maxVisiblePosts; i < this._postsNumber; i++) {
      this._postsList[i].classList.add("post--hidden", "post--hidden-height")
    }

    this._postsBtn.addEventListener("click", e => {
      let number = 0
      e.preventDefault()

      if (this._maxVisiblePosts <= this._postsNumber) {
        number = this._maxVisiblePosts += 2
      } else {
        number = this._postsNumber - this._maxVisiblePosts
      }
      this.showMore(number)
    })
  }

  showMore(number) {
    if (number >= this._postsNumber) {
      this._postsBtn.classList.add("button--hidden")
    }

    for (let i = 0; i < number; i++) {
      this._postsList[i].classList.remove("post--hidden-height")

      window.setTimeout(() => {
        this._postsList[i].classList.remove("post--hidden")
      }, 200)
    }
  }
}

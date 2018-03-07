export default class Modal {
  init() {
    if (!this.setVars()) return
    this.setEvents()
  }

  setVars() {
    this._modal = document.querySelectorAll(".jsModal")
    if (!this._modal) return false

    this._modalButton = document.querySelectorAll(".jsModalButton")
    this._isVisible = false

    return true
  }

  setEvents() {
    for (let i = 0; i < this._modalButton.length; i++) {
      this._modalButton[i].addEventListener("click", (e) => {
        e.preventDefault()

        let target = e.currentTarget.getAttribute("href")
        let modal = document.querySelector(target)

        this._isVisible = true
        modal.classList.toggle("modal--visible")

        if (this._isVisible) {
          modal.addEventListener("click", (e) => {
            this._isVisible = false
            e.target.classList.contains("jsModalBg")  ? modal.classList.remove("modal--visible") : null
          })
        }
      })
    }
  }
}

export default class Modal {
  init() {
    if (!this.setVars()) return
    this.setEvents()
  }

  setVars() {
    this._modal = document.querySelectorAll(".jsModal")
    this._modalButton = document.querySelectorAll(".jsModalButton")
    this._isVisible = false
    if (!this._modal) return false

    return true
  }

  setEvents() {
    for (let i = 0; i < this._modalButton.length; i++) {
      this._modalButton[i].addEventListener("click", (e) => {
        e.preventDefault()

        let target = e.currentTarget.getAttribute("href")
        let modal = document.querySelector(target)

        this._isVisible = !this._isVisible
        modal.classList.toggle("modal--visible")

        if (this._isVisible) {
          for (let i = 0; i < this._modal.length; i++) {
            modal.addEventListener("click", (e) => {
              modal.classList.remove("modal--visible")
            })
          }
        }
      })
    }
  }
}

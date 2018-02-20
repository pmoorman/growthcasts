export default class DiscountTimer {
  init() {
    if (!this.setVars()) return
    this.setEvents()
  }

  setVars() {
    this._discountBar = document.querySelector(".jsDiscountBar")
    if (!this._discountBar) return false

    this._timer = document.querySelector(".jsTimer")
    this._deadline = "2018-02-20 18:00:00"
    this._remainingTime = 0
    this._interval

    return true
  }

  setEvents() {
    this._interval = setInterval(() => {
      this._remainingTime = this.getTime(this._deadline)

      if(this._remainingTime.total < 0 || !this._remainingTime){
        this.disableDiscount()
      }

      this.updateElements()
    },1000);
  }

  getTime() {
    let total = Date.parse(this._deadline) - Date.parse(new Date())
    if (!total) return false

    let seconds = Math.floor( (total / 1000) % 60 )
    let minutes = Math.floor( (total / 1000 / 60) % 60 )

    return {
      'total': total,
      'minutes': minutes,
      'seconds': seconds
    }
  }

  updateElements() {
    let minutes = ("0" + this._remainingTime.minutes.toString()).split('').slice(-2)
    let seconds = ("0" + this._remainingTime.seconds.toString()).split('').slice(-2)

    for (let i = 0; i < this._timer.children.length; i++) {
      this._timer.children[i].innerText = [...minutes, ...seconds][i]
    }
  }

  disableDiscount() {
    for (let i = 0; i < this._timer.children.length; i++) {
      this._timer.children[i].innerText = "0"
    }
    this._discountBar.style.display = "none"
  }
}

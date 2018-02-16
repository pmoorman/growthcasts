'use strict';

class Accordion {
  init() {
    if (!this.setVars()) return;
    this.setEvents();
  }

  setVars() {
    this._accordion = document.querySelectorAll(".jsAccordion");
    if (!this._accordion) return false;

    this._accordionHead = document.querySelectorAll(".jsAccordionHead");
    this._accordionItem = document.querySelector(".jsAccordionContent");
    return true;
  }

  openSearchedOne() {
    let id = window.location.hash.substring(1);

    let l = this._accordion.length;
    for (let i = 0; i < l; i++) {
      if (this._accordion[0].dataset.id === id) {
        this.openAccordion(this._accordion[i].querySelector(".jsAccordionHead"));
        // i.scrollIntoView(false)
        let to = this._accordion[i].offsetTop;
        to = to - 100;

        this._accordion[i].style.background = "rgba(30, 223, 127, 0.2)";

        setTimeout(() => {
          this._accordion[i].style.background = "none";
        }, 1000);
      }
    }
  }

  openAccordion(i) {
    let content = i.parentElement.querySelector(".jsAccordionContent");
    let txt = i.parentElement.querySelector(".jsAccordionTxt");
    let h = txt.offsetHeight + 25;

    i.classList.add("active");
    content.style.height = h + "px";
  }

  closeAccordion(i) {
    let content = i.parentElement.querySelector(".jsAccordionContent");

    i.classList.remove("active");
    content.style.height = 0;
  }

  setEvents() {
    let l = this._accordionHead.length;
    for (let i = 0; i < l; i++) {
      this._accordionHead[i].addEventListener("click", e => {
        e.preventDefault();
        this._accordionHead[i].classList.contains("active") ? this.closeAccordion(this._accordionHead[i]) : this.openAccordion(this._accordionHead[i]);
      });
    }

    if (window.location.hash !== "") setTimeout(this.openSearchedOne(), 1000);
  }
}

class App {
  constructor() {
    this.components();
  }

  components() {
    new Accordion().init();
  }
}

new App();

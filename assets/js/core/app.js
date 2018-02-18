import Menu from '../components/menu'
import Accordion from '../components/accordion'
import Carousel from '../components/carousel'
import SmoothScroll from '../components/smoothscroll'

class App {
  constructor() {
    this.components()
  }

  components() {
    new Menu().init()
    new Accordion().init()
    new Carousel().init()
    new SmoothScroll().init()
  }
}

new App()

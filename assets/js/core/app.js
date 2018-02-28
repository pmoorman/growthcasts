import Menu from '../components/menu'
import Accordion from '../components/accordion'
import Slider from '../components/slider'
import Carousel from '../components/testimonials'
import Modal from '../components/modal'
import ScrollSpy from '../components/scrollspy'
import SmoothScroll from '../components/smoothscroll'

class App {
  constructor() {
    this.components()
  }

  components() {
    new Menu().init()
    new Accordion().init()
    new Slider().init()
    new Carousel().init()
    new Modal().init()
    new ScrollSpy().init()
    new SmoothScroll().init()
  }
}

new App()

import Menu from '../components/menu'
import Accordion from '../components/accordion'
import Slider from '../components/slider'
import Carousel from '../components/testimonials'
import SmoothScroll from '../components/smoothscroll'
import Modal from '../components/modal'
import Timer from '../components/timer'

class App {
  constructor() {
    this.components()
  }

  components() {
    new Menu().init()
    new Accordion().init()
    new Slider().init()
    new Carousel().init()
    new SmoothScroll().init()
    new Modal().init()
    new Timer().init()
  }
}

new App()

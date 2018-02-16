import Accordion from '../components/accordion'
import Carousel from '../components/carousel'

class App {
  constructor() {
    this.components()
  }

  components() {
    new Accordion().init()
    new Carousel().init()
  }
}

new App()

import Accordion from '../components/accordion'

class App {
  constructor() {
    this.components()
  }

  components() {
    new Accordion().init()
  }
}

new App()

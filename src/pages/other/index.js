import './index.scss'
import '../../components/header/index'
import 'popper.js'
import 'bootstrap'
import eventBus from "../../assets/js/event_bus";

const view = {
  $el: $('body'),

  render(data) {
  }
}

const model = {}

const controller = {
  view: null,
  model: null,
  el: null,
  _init(view, model) {
    this.view = view
    this.model = model
    this.$el = this.view.$el
    window.onload = this.onload
  },
  onload() {
    $('.page').removeClass('invisible').addClass('visible')
    $('.spinner').hide()
  }
}

controller._init(view, model)

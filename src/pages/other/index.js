import './index.scss'
import 'popper.js'
import 'bootstrap'
import eventBus from "../../assets/js/event_bus";
import '../../components/header/index'
import {showModal, hideModal} from "../../components/modal";
import {showLoading, hideLoading} from "../../components/loading";

const view = {
  $el: $('.page'),

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
    this.handleLoaded()
  },
  handleLoaded() {
    this.$el.removeClass('invisible').addClass('visible')
    hideLoading()
  }
}

controller._init(view, model)

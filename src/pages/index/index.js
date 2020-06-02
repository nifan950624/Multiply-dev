import './index.scss'
import 'popper.js'
import 'bootstrap'
import eventBus from "../../assets/js/event_bus";
import '../../components/header/index'
import {showLoading, hideLoading} from "../../components/loading/index";
import {showModal, hideModal} from '../../components/modal/index'
import {showToast, hideToast} from "../../components/toasts/index";

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
    this.handleClick()
    this.handleLoaded()
  },
  handleClick() {
    this.$el.find('.btn').on('click', (e) => {
      showToast()
    })
  },
  handleLoaded() {
    this.$el.removeClass('invisible').addClass('visible')
    hideLoading()
  }
}

controller._init(view, model)




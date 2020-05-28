import './index.scss'
import '../../components/header/index'
import $ from 'jquery'
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
  },
}

controller._init(view, model)

$('.page').removeClass('invisible').addClass('visible').find('.spinner').hide()


